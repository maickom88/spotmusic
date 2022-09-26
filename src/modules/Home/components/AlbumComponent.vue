<template lang="">
    <div class="lib">
        <div class="top-lib">
            <span>Albums</span>
            <span>Show all</span>
        </div>
        <div class="carousel">
            <div class="card-album">
                <img
                    src="https://raptv.com/wp-content/uploads/Bruno_Mars_LD_t600.jpg"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

.lib {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
}
.top-lib {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.lib .top-lib > :nth-child(1) {
    font-size: larger;
    font-weight: bold;
    color: white;
}
.lib .top-lib > :nth-child(2) {
    font-size: small;

    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all ease-in 0.2s;
}
.lib .top-lib > :nth-child(2):hover {
    background-color: rgba(0, 0, 0, 0.385);
    cursor: pointer;
}
.carousel {
    display: flex;
}
.card-album {
    display: flex;
    transition: 0.2s all ease-in-out;
    position: relative;
    overflow: hidden;

    border-radius: 8px;
}
.card-album::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 15rem;
    background: rgba(255, 255, 255, 0.368);
    filter: blur(1px);
    opacity: 0;
    top: 1rem;
    transition: 0.7s;
    transform: rotate(-20deg) translateX(-2rem);
}
.card-album:hover::before {
    opacity: 0.8;
    transform: rotate(-20deg) translateX(20rem);
}

.card-album > img {
    object-fit: cover;
    border-radius: 8px;
    width: 13rem;
    height: 9rem;
}
.card-album:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.41);
}

</style>
<script setup></script>
