<template>
    <div class="artist">
        <img
            src="https://i.pinimg.com/originals/c4/21/23/c42123e03ee5b902fd473c3ea04b42f3.jpg"
            alt=""
        />
        <div class="content-artist">
            <span>West Coast</span>
            <span>Lana Del Rey</span>
        </div>
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.62 20.81C12.28 20.93 11.72
                                     20.93 11.38 20.81C8.48
                                      19.82 2 15.69
                                      2 8.68998C2 5.59998 
                                      4.49 3.09998 7.56 
                                      3.09998C9.38 3.09998 
                                      10.99 3.97998 12 
                                      5.33998C13.01 3.97998 
                                      14.63 3.09998 16.44 
                                      3.09998C19.51 3.09998
                                       22 5.59998 22 
                                      8.68998C22 15.69 15.52 
                                      19.82 12.62 20.81Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </div>
</template>

<style scoped>

.artist {
    display: flex;
    gap: 1rem;
    align-items: center;
}
.artist > svg {
    margin-left: 5rem;
}
.artist > img {
    width: 3rem;
    height: 3rem;
    border-radius: 10px;
    object-fit: cover;
}

.content-artist {
    display: flex;
    color: white;
    gap: 0.4rem;
    flex-direction: column;
}
.content-artist > :nth-child(1) {
    font-size: large;
    font-weight: 400;
}
.content-artist > :nth-child(2) {
    font-size: small;
}
.artist > img,
.content-artist {
    cursor: pointer;
}
.artist > svg {
    stroke: #ffffff;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
}
.artist > svg:hover {
    fill: rgb(252, 74, 74);
    stroke-width: 3;
    stroke: rgb(252, 74, 74);
}
</style>

<script setup></script>