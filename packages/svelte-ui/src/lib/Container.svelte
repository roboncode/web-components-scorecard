<svelte:options tag="svelte-container" accessors={true} />

<div part="container" class="w-full h-full flex flex-col overflow-hidden">
  <div part="content" class="flex flex-col flex-grow h-0 overflow-auto">
    <slot />
  </div>
</div>

<style>
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .overflow-auto {
    overflow: auto;
  }

  .h-0 {
    height: 0;
  }

  .w-full {
    width: 100%;
  }

  .h-full {
    height: 100%;
  }
</style>
