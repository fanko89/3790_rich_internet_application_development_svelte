<script>
   export let data

</script>

<main>
    <h2>{data.firstName} {data.lastName}</h2>
    <img src="{data.avatar}" alt="person avatar"/>
    <ul>
        <li>Title: {data.title}</li>
        <li>Phone: {data.phone}</li>
        <li>Email: {data.email}</li>
        <li>Address: {data.address}</li>
        <li>end of information</li>
     
    </ul>
</main>

<style>
    img{
        width: 15rem;
        height: 100%;
    }

</style>