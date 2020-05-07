<script>
	export let header;
	export let headerSize = "5";
</script>
<div class="content">
  <div class="is-size-{headerSize} has-text-dark">{header}</div>
  <div class="has-text-grey"><slot></slot></div>
</div>