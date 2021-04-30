import { connectToDatabase } from '$lib/dbconnect';
import { ObjectId } from 'mongodb';

export async function get(request) {
	try {
		const dbConnection = await connectToDatabase();
		const db = dbConnection.db;
		const collection = db.collection('posts');
		const posts = await collection.find({}).toArray();
		
		return {
			status: 200,
			body: {
				posts
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'A server error occured'
			}
		};
	}
}
export async function post(request) {
	try {
		const dbConnection = await connectToDatabase();
		const db = dbConnection.db;
		const collection = db.collection('posts');

		const post = JSON.parse(request.body)
		await collection.insertOne(post)
		
		return {
			status: 200,
			body: {
				status:'บันทึกสำเร็จจจจจจจ้าาาา🤣🤣'
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'A server error occured'
			}
		};
	}
}
