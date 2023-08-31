<script lang="ts">
    const links = [
        {
            href: "/downloads",
            title: "Download",
        },
        {
            href: "https://github.com/phoeenix05/sakura.git",
            title: "See on GitHub",
        },
        {
            href: "https://github.com/phoeenix05/sakura-website.git",
            title: "Code for this website",
        },
    ];
</script>

{#each links as link}
    <div>
        <a href={link.href}>{link.title}</a>
    </div>
{/each}
