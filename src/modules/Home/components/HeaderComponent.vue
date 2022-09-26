<template>
    <div class="header">
        <div class="information">
            <span>{{name}}</span>
            <div class="circle-profile">
                <img
                    :src="photo"
                    :alt="name"
                />
            </div>
            <div class="actions">
                <div class="btn">
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
                            fill="#474747"
                        />
                    </svg>
                    <span>Play</span>
                </div>
                <div class="btn">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 16.5C2.59 16.5 2.25 16.16 2.25
                                     15.75V8.25C2.25 7.84 2.59 7.5 3 7.5C3.41 
                                     7.5 3.75 7.84 3.75 8.25V15.75C3.75 16.16 
                                     3.41
                                      16.5 3 16.5Z"
                            fill="#474747"
                        />
                        <path
                            d="M7.5 19C7.09 19 6.75 18.66 6.75 
                                    18.25V5.75C6.75 5.34 7.09 5 7.5 5C7.91
                                     5 8.25 5.34 
                                    8.25 5.75V18.25C8.25 18.66 7.91 19 7.5 19Z"
                            fill="#474747"
                        />
                        <path
                            d="M12 21.5C11.59 21.5 11.25 21.16 11.25 
                                    20.75V3.25C11.25 2.84 11.59 2.5 12 2.5C12.41
                                     2.5 12.75 2.84 12.75 3.25V20.75C12.75 21.16
                                      12.41 21.5 12 21.5Z"
                            fill="#474747"
                        />
                        <path
                            d="M16.5 19C16.09 19 15.75 18.66 15.75 
                                    18.25V5.75C15.75 5.34 16.09 5 16.5 5C16.91 5
                                     17.25 5.34 17.25 5.75V18.25C17.25 18.66 
                                     16.91 
                                     19 16.5 19Z"
                            fill="#474747"
                        />
                        <path
                            d="M21 16.5C20.59 16.5 20.25 16.16 20.25 
                                    15.75V8.25C20.25 7.84 20.59 7.5 21 7.5C21.41
                                     7.5 21.75 7.84 21.75 8.25V15.75C21.75 
                                     16.16 
                                     21.41 16.5 21 16.5Z"
                            fill="#474747"
                        />
                    </svg>

                    <span>Podcast</span>
                </div>
                <div class="btn btn-translucid">
                    <span>Subscribe</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    
.header {
    display: flex;
    width: 100%;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    position: relative;
    height: min(250px);
    border-radius: 10px;
    background: linear-gradient(rgba(0, 0, 0, 0.088), rgba(0, 0, 0, 0.588)),
        v-bind('fullPhoto')
            no-repeat center;
    background-size: cover;
    padding: 1.5rem 3rem;
}
.information {
    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content: space-between;
}
.information > span {
    font-size: large;
    color: white;
    font-weight: bold;
    letter-spacing: 1.2px;
}

.actions {
    display: flex;
    gap: 1.5rem;
}
.btn {
    width: 130px;
    height: 40px;
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    transition: 0.3s ease-in-out;
    background-color: rgb(203, 203, 203);
    color: rgb(47, 47, 47);
}
.btn-translucid:hover {
    transform: scale(1.1);
    background-color: var(--purple);
    box-shadow: 0px 0px 3px var(--purple);
}
.btn:not(:last-child):hover {
    transform: scale(1.1);
    background-color: rgb(255, 255, 255);
}
.btn > svg {
    position: absolute;
    left: 0.6rem;
    transform: scale(1.2);
}
.btn:not(:last-child) > span {
    margin-left: 15px;
}
.btn-translucid {
    margin: 0 !important;
    color: white;
    background-color: rgba(221, 221, 221, 0.396);
}

.circle-profile {
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    left: 20%;
    bottom: -3rem;
    margin-right: auto;
    position: absolute;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border: 1px solid rgba(255, 255, 255, 0.198);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.circle-profile > img {
    object-fit: cover;
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
}
</style>

<script setup lang="ts">
    defineProps({
        name: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true
        },
        fullPhoto: {
            type: String,
            required: true,
            
        }
    });
</script>
