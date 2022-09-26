<template>
    <div class="sidebar-discover">
        <span class="text-small">The best 🔥</span>
        <div class="cards-players">
            <div class="card-player">
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                />
                <div class="text-description">
                    <span>Lazy Song</span>
                    <span>Ludivic </span>
                </div>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 
                            17.52 6.48 22 12 22C17.52 22 22 
                            17.52 22 12C22 6.48 17.52 2 12 2ZM14.66
                             13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.1
                              15.38 9.1 13.48V12V10.52C9.1 8.61 10.45 7.84
                              12.1 8.79L13.38 9.53L14.66 10.27C16.31 11.22
                               16.31 12.78 14.66 13.73Z"
                        fill="#FFFFFF"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: rgba(255, 255, 255, 0.071);
    border-right: 1px solid rgba(255, 255, 255, 0.071);
    padding: 2rem 0;
    overflow: hidden;
    position: relative;
}
.sidebar::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 140vh;
    top: -10px;
    left: 5rem;
    z-index: -9;
    background: rgba(255, 255, 255, 0.029);
    filter: blur(3px);
    transform: rotate(-13deg);
}
.sidebar-top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 1.5rem;
}
.logo {
    color: white;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}
.logo > img {
    width: 1.8rem;
}
::placeholder {
    color: white;
}
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
.sidebar-items {
    display: flex;
    flex-direction: column;
    color: white;
}
.text-small {
    margin: 0 1.5rem;
    font-size: smaller;
    padding-bottom: 10px;
    color: white;
}

.sidebar-items > ul {
    margin: 0;
    padding: 0;
}

.menu {
    display: flex;
    padding: 15px 1.5rem;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: 0.2s all ease-in-out;
}
.menu:hover:has(.not-active) {
    margin-left: 0.6rem;
    background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.15),
        transparent
    );
}

.menu:not(.is-active)::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 10rem;
    background: rgba(255, 255, 255, 0.107);
    filter: blur(1px);
    opacity: 0;
    top: 1rem;
    transition: 0.7s;
    transform: rotate(-20deg) translateX(-2rem);
}

.menu:has(.not-active):hover::before {
    opacity: 0.8;
    transform: rotate(-20deg) translateX(20rem);
}

.menu > svg {
    width: 1.3rem;
}
.cards-players {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 0;
    height: auto;
    padding: 10px 1.5em;
}
.is-active {
    content: '';
    position: absolute;
    width: 4px;
    height: 20px;
    left: 10px;
    opacity: 1;
    transition: all 0.2s ease-in;
    box-shadow: 0 0 10px var(--purple);
    border-radius: 0 5px 5px 0;
    background-color: var(--purple);
}
.not-active {
    opacity: 0;
    content: '';
    position: absolute;
}

.sidebar-discover {
    height: 280px;
    overflow: hidden;
    position: relative;
    overflow-y: scroll;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
}

.card-player {
    display: flex;
    gap: 1rem;
    width: 100%;
    padding: 12px 10px;
    background-color: #202020;
    border-radius: 0.6rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    justify-content: space-between;
}
.card-player:hover {
    cursor: pointer;
    position: relative;
    padding: 15px 13px;
    transform: translateY(-10px);
    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.341);
}
.card-player:hover .text-description::after {
    content: '';
    position: absolute;
    width: 45px;
    height: 45px;
    transition: 0.3s ease-in-out;
    right: 0;
    background: linear-gradient(to right, transparent 20%, #202020 80%);
}
.card-player > svg {
    transition: 0.3s ease-in-out;
}

.card-player:hover > .text-description > :nth-child(1) {
    font-weight: bold;
    text-overflow: initial;
    overflow: visible;
    animation: text-animation 5s linear infinite;
}

.card-player:hover > .text-description > :nth-child(2) {
    text-overflow: initial;
    overflow: visible;
    animation: text-animation 3s linear infinite;
}

.card-player:hover > img {
    transform: scale(1.3);
}
.card-player:hover > svg {
    transform: scale(1.3);
}
.card-player > img {
    width: 2rem;
    height: 2rem;

    transition: 0.3s ease-in-out;
    border-radius: 100%;
    object-fit: cover;
}
.text-description {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    margin-left: 0;
    color: white;
}
.text-description > :nth-child(1) {
    font-size: 0.9rem;
    width: 120px;
    min-width: 100%;
    text-overflow: ellipsis;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    white-space: nowrap;
}

.text-description > :nth-child(2) {
    font-size: small;
    color: rgba(255, 255, 255, 0.48);
    width: 120px;
    min-width: 100%;
    text-overflow: ellipsis;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    white-space: nowrap;
}
.sidebar-bottom {
    position: absolute;
    height: min(150px);
    z-index: 1;
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.33);
    bottom: 0;
    box-shadow: 0px -10px 10px rgba(255, 255, 255, 0.095);
}

.card-profile {
    margin: 5px 1rem;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    width: 100%;
    padding: 12px 10px;
    border-radius: 0.6rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    justify-content: space-between;
}
.card-profile:hover {
    transform: scale(1.1);
    margin-left: 30px;
}
.card-profile > img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    object-fit: cover;
}
li > a {
    color: white;
}

</style>

<script setup></script>