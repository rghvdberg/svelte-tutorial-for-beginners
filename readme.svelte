<!-- Component -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="myClass" on:click|self />

<!-- App   -->
<!-- svelte-ignore a11y-click-events-have-key-events missing-declaration -->
<myComponent on:click|once={myFunction} />
