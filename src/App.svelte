<script>
	import {TButton} from './index'
	const handleButtonClick = (event)=>{
		console.log("tb",event)
	}
</script>

<main>
	<TButton on:click={handleButtonClick} variant="outline" theme="danger">
		取消
	</TButton>
</main>
