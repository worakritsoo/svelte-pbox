<script>
import Sidemenu from "$lib/SideMenu/sidemenu.svelte";

</script>
<body>
	<ion-split-pane content-id="menu-content" when="lg">
		<ion-menu content-id="menu-content" side="start" type="overlay">
			<Sidemenu></Sidemenu>
		</ion-menu>
		<ion-content id="menu-content">
			<slot />
		</ion-content>
	</ion-split-pane>
</body>

