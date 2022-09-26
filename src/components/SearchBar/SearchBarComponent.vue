<template>
    <div class="search-sidebar">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 
                        11.5C21 6.25329 16.7467
                         2 11.5 2C6.25329 2 2 6.25329 2 11.5C2
                          16.7467 6.25329 21 11.5 21Z"
                stroke="#FFFFFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M22 22L20 20"
                stroke="#FFFFFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <input type="text" placeholder="Search..." />
    </div>
</template>

<style scoped>
.search-sidebar {
    display: flex;
    padding: 10px 10px;
    background-color: #2d2b29c3;
    border-radius: 0.6rem;
}
.search-sidebar > input {
    outline: none;
    background-color: transparent;
    border: none;
    margin-left: 5px;
    color: white;
}
</style>

<script setup></script>
