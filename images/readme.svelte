<!-- Component -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="myClass" on:click|self />

<!-- App   -->
<!-- svelte-ignore a11y-click-events-have-key-events missing-declaration -->
<myComponent on:click|once={myFunction} />

<myComponent>
  <div slot="namedSlot">
    <p>Named Slot</p>
    <p />
  </div>
</myComponent>

<div class="modal">
  <slot />
  <slot name="namedSlot" />
</div>
