
<script>
import Sidemenu from "$lib/SideMenu/sidemenu.svelte";

</script>
<body>
	<ion-split-pane content-id="main" when="lg">
		<ion-menu content-id="main" side="start" type="overlay">
			<Sidemenu></Sidemenu>
		</ion-menu>
		 <div class="ion-page" id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pea</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-no-padding">
		<slot></slot>
    </ion-content>
 		 </div>
	</ion-split-pane>
</body>

