<ion-header>
	<ion-toolbar>
		<ion-title>SideMenu</ion-title>
	</ion-toolbar>
</ion-header>
<ion-content>
	<nav>
		<a href=".">Home</a>
		<a href="blogs">Blogs</a>
		<a href="posts">Post</a>
		<a sveltekit:prefetch href="/blogs/">blog</a>
        
	</nav>
</ion-content>

<style>

    nav{
        margin-top: 5px;
        margin-left: 5px;
        display: grid;
        gap: 5px;
    }
</style>
