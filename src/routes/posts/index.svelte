<script context="module">
    
	export async function load({ fetch }) {
		const res = await fetch('/posts/*');
        console.log(res);
		const jsonRes = await res.json();

		return {
			props: {
				posts: jsonRes.posts
			}
		};
	}
</script>
<script>
    export let posts;
	console.log(posts);
</script>




{#if posts!==undefined}
    {#each posts as post}
     <!-- content here -->
     <ion-card>
         <ion-card-header>
             <ion-card-title>{post.Name}</ion-card-title>
             <ion-card-subtitle>{post.url}</ion-card-subtitle>
         </ion-card-header>
         <ion-card-content>
           {JSON.stringify(post.details)}
         </ion-card-content>
     </ion-card>
    {/each}
    {:else}
     Post NO

{/if}


<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
