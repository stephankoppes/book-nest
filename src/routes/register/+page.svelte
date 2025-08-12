<script lang="ts">
    import AuthForm from "$components/AuthForm.svelte";

    let { form } = $props();
</script>
<AuthForm isRegistration={true} {form} />
