<script context="module">
	
</script>

<script>
	let posts;
	let events = [];

	let name;
	let url;
	let details;
	let user;
	let tags = [];
	let isShowing;

	async function addPost() {
		alert('บันทึก🐱‍🏍')
		try {
			const post = {
				name,
				url,
				details,
				selected
			};
			await fetch('/posts', {
				method: 'POST',
				body: JSON.stringify(post)
			});
		} catch (error) {
			alert('เกิดข้อผิดพลาด🤦‍♂️🤦‍♂️');
		}
	}
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<!-- src/routes/index.svelte -->

<ion-button on:click={() => (isShowing = !isShowing)}>
	{isShowing ? '-' : '+'}
</ion-button>

{#if isShowing}
	<addPost>
		<ion-card>
			<ion-card-header>
				<ion-card-title><h1>{name || 'ตัวอย่างชื่อเว็บ'}</h1></ion-card-title>
				<ion-card-subtitle>{details || 'ข้อมูล'}</ion-card-subtitle>
			</ion-card-header>

			<ion-card-content>
				<input type="text" bind:value={name} placeholder="ชื่อเว็บ" />
				<input type="text" bind:value={url} placeholder="ที่อยู่เว็บ" />
				<input type="text" bind:value={details} placeholder="อธิบาย" />

				<ion-item>
					<ion-label>Tag</ion-label>
					<ion-select value={tags} multiple="true" placeholder="เลือกกลุ่ม">
						<ion-select-option value="1">เว็บ</ion-select-option>
						<ion-select-option value="2">คู่มือ</ion-select-option>
						<ion-select-option value="3">แหล่งเรียนรู้</ion-select-option>
					</ion-select>
				</ion-item>
				<ion-button on:click={addPost} disabled={!name || !url || !details}>บันทึก</ion-button>
			</ion-card-content>
		</ion-card>
	</addPost>
{/if}

<style>
	ion-card-content {
		display: grid;
		justify-self: center;
	}
</style>
