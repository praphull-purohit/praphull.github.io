<script>
	export let icon;
	export let title;

</script>
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-one-third is-size-4">
        <i class="fa fa-{icon}"></i> {title}
      </div>
      <div class="column is-two-thirds">
        <slot></slot>
      </div>
    </div>
  </div>
</section>