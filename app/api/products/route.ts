import { NextRequest, NextResponse } from 'next/server';
import { getProducts, createProduct, type Product } from '@/lib/admin/db';
import slugify from 'slugify';

// GET all products
export async function GET() {
  try {
    const products = getProducts();
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST create new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const required = ['name', 'brand', 'category', 'amazonUrl', 'price', 'description'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate slug and ID
    const slug = slugify(body.name, { lower: true, strict: true });
    const id = body.id || slug;

    // Check if product already exists
    const existing = getProducts().find(p => p.id === id || p.slug === slug);
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Product with this name already exists' },
        { status: 409 }
      );
    }

    const newProduct: Omit<Product, 'createdAt' | 'updatedAt'> = {
      id,
      slug,
      name: body.name,
      brand: body.brand,
      category: body.category,
      subCategory: body.subCategory || undefined,
      collection: body.collection || body.category,
      image: body.image || '/products/placeholder.jpg',
      amazonUrl: body.amazonUrl,
      price: parseFloat(body.price),
      rating: parseFloat(body.rating) || 4.5,
      reviewCount: parseInt(body.reviewCount) || 0,
      badge: body.badge || undefined,
      description: body.description,
      ingredients: body.ingredients || [],
      pros: body.pros || [],
      cons: body.cons || [],
      featured: body.featured || false,
      trending: body.trending || false,
    };

    const product = createProduct(newProduct);

    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
