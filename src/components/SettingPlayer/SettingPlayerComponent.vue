<template>
    <div class="settings">
        <div class="download">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9 11V17L11 15"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9 17L7 15"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M22 10V15C22 20 20 
                        22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <span>1:45/3:20</span>

        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 10V14C2 16 3 17 5 17H6.43C6.8 17 7.17 
                    17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 
                    15 16.59V7.41003C15 4.43003 12.93 3.29003 10.41 
                    4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 
                    6.43 7.00003H5C3 7.00003 2 8.00003 2 10Z"
                stroke-width="1.5"
            />
            <path
                d="M18 8C19.78 10.37 19.78 13.63 18 16"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M19.83 5.5C22.72 9.35 22.72 14.65 19.83 18.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <div class="volume">
            <input
                type="range"
                min="1"
                max="100"
                value="50"
                class="slider"
                id="myRange"
            />
        </div>
    </div>
</template>

<style scoped>

.settings {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.settings > span {
    color: white;
    font-size: small;
}
.settings > svg {
    stroke: white;
}
.download > svg {
    stroke: white;
    transform: scale(0.8);

    transition: all ease-in-out 0.2s;
}
.download {
    padding: 2px;
    border: 1px solid #ffffff;
    border-radius: 100%;
    cursor: pointer;
}


.download>svg:hover{
    stroke: rgb(33, 198, 33);
}
</style>
<script setup></script>
