<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const url = `/blog/${page.params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					article: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>
<script>
    export let article;
	console.log(article);
</script>
<style>
    /* your styles go here */
</style>
<!-- markup (zero or more items) goes here -->
{#if article.length==undefined}
No Blogs
{/if}




<slot></slot>