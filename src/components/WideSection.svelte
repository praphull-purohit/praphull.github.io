<script>
    import EmptySection from './EmptySection.svelte';

	export let icon;
	export let title;

</script>
<EmptySection>
  <div class="columns">
    <div class="column is-one-third is-size-4">
      <i class="icon-themed {icon}"></i> {title}
    </div>
    <div class="column is-two-thirds">
      <slot></slot>
    </div>
  </div>
</EmptySection>