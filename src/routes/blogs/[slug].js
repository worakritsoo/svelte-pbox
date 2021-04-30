import {connectToDatabase} from '$lib/dbconnect';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const dbConnection = await connectToDatabase();
	const db = dbConnection.db;
	const collection = db.collection('posts');
	const { slug } = params;

	

	const article = await collection.find({ slug }).toArray();

	if (article) {
		return {
			body: {
				article
			}
		};
	}
}
