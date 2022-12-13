<script lang="ts">
  export let header: string;
  export let icon: string;
</script>

<div class="card">
  {#if header}
  <div class="card-header">
    <div class="card-header-title">{header}</div>
    {#if icon}<div class="card-header-icon"><i class="icon {icon}"></i></div>{/if}
  </div>
  {/if}
  <div class="card-content"><slot></slot></div>
</div>