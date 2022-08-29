<template>
    <div class="sidebar">
        <div class="sidebar-top">
            <div class="logo">
                <img src="../../assets/images/logo.png" alt="Logo SpotMusic" />
                <span>SpotMusic.</span>
            </div>
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
        </div>
        <div class="sidebar-items">
            <span class="text-small">Menu</span>
            <ul>
                <li>
                    <div class="menu active">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.0402 6.82165L14.2802 2.79165C12.7102
                                1.69165 10.3002 1.75165 8.79023 2.92165L3.78023
                                 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023
                                  10.4716V17.3716C1.99023 19.9216 4.06023 
                                  22.0016 6.61023 22.0016H17.3902C19.9402
                                  22.0016 22.0102 19.9316 22.0102
                                  17.3816V10.6016C22.0102 9.25165
                                  21.1402 7.59165 20.0402 6.82165ZM12.7502
                                   18.0016C12.7502 18.4116 12.4102 18.7516
                                    12.0002 18.7516C11.5902 18.7516 11.2502
                                     18.4116 11.2502 18.0016V15.0016C11.2502
                                      14.5916 11.5902 14.2516 12.0002
                                       14.2516C12.4102 14.2516 12.7502
                                        14.5916 12.7502 15.0016V18.0016Z"
                                fill="#FFFFFF"
                            />
                        </svg>

                        <span>Home</span>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.9808 3.02084C20.1108 2.15084 18.8808 
                                1.81084 17.6908 2.11084L7.89084 4.56084C6.24084
                                 4.97084 4.97084 6.25084 4.56084 7.89084L2.11084
                                 17.7008C1.81084 18.8908 2.15084 20.1208 3.02084
                                 20.9908C3.68084 21.6408 4.55084 22.0008 5.45084
                                 22.0008C5.73084 22.0008 6.02084 21.9708 6.30084
                                 21.8908L16.1108 19.4408C17.7508 19.0308 19.0308
                                 17.7608 19.4408 16.1108L21.8908 6.30084C22.1908
                                 5.11084 21.8508 3.88084 20.9808 
                                 3.02084ZM12.0008
                                 15.8808C9.86084 15.8808 8.12084 14.1408 8.12084
                                 12.0008C8.12084 9.86084 9.86084 8.12084 12.0008
                                8.12084C14.1408 8.12084 15.8808 9.86084 15.8808
                                12.0008C15.8808 14.1408 14.1408 15.8808 12.0008
                                15.8808Z"
                                fill="#FFFFFF"
                            />
                        </svg>

                        <span>Discover</span>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.44 3.10156C14.63 3.10156
                                 13.01 3.98156 12 5.33156C10.99
                                  3.98156 9.37 3.10156 7.56
                                   3.10156C4.49 3.10156 2 5.60156
                                    2 8.69156C2 9.88156 2.19 10.9816
                                     2.52 12.0016C4.1 17.0016 8.97 
                                     19.9916 11.38 20.8116C11.72 
                                     20.9316 12.28 20.9316 12.62 
                                     20.8116C15.03 19.9916 19.9 
                                     17.0016 21.48 12.0016C21.81 
                                     10.9816 22 9.88156 22
                                      8.69156C22 5.60156 19.51 
                                      3.10156 16.44 3.10156Z"
                                fill="#FFFFFF"
                            />
                        </svg>

                        <span>Favorites</span>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.0016 21.9292C6.96156 
                                21.9292 2.85156 17.8292 2.85156
                                 12.7792V10.8992C2.85156 
                                 10.5092 3.17156 10.1992
                                  3.55156 10.1992C3.93156 
                                  10.1992 4.25156 10.5192 
                                  4.25156 10.8992V12.7792C4.25156 
                                  17.0492 7.72156 20.5192 11.9916 
                                  20.5192C16.2616 20.5192 19.7316 
                                  17.0492 19.7316 12.7792V10.8992C19.7316
                                   10.5092 20.0516 10.1992 20.4316
                                    10.1992C20.8116 
                                   10.1992 21.1316 10.5192 21.1316
                                    10.8992V12.7792C21.1516 
                                   17.8292 17.0416 21.9292 12.0016 21.9292Z"
                                fill="#FFFFFF"
                            />
                            <path
                                d="M11.9984 2C8.63844 2 5.89844 4.74 5.89844
                                 8.1V12.79C5.89844 16.15 8.63844 
                                 18.89 11.9984 18.89C15.3584 18.89
                                  18.0984 16.15 18.0984 12.79V8.1C18.0984
                                   4.74 15.3584
                                   2 11.9984 2ZM14.1784 10.59C14.1084 
                                   10.86 13.8584 11.04 13.5884 11.04C13.5384
                                    11.04 13.4784 11.03 13.4284 11.02C12.4084
                                     10.74 11.3284 10.74 10.3084 
                                     11.02C9.97844 11.11 9.64844 10.92 9.55844 
                                     10.59C9.46844 10.27 9.65844 9.93 9.98844
                                      9.84C11.2184 9.5 12.5184 9.5 13.7484 
                                      9.84C14.0784 9.93 14.2684 10.26 14.1784
                                       10.59ZM15.0284 7.82C14.9384 8.07 14.7084 
                                       8.22 14.4584 8.22C14.3884 8.22 14.3184 
                                       8.21 14.2484 8.18C12.7184 7.62 11.0384
                                        7.62 9.50844 8.18C9.18844 8.3 8.83844
                                         8.14 8.71844 7.82C8.60844 7.51 8.76844
                                          7.16 9.08844 7.04C10.8884 6.39 12.8684
                                           6.39 14.6584 7.04C14.9784 7.16 
                                           15.1384 7.51 15.0284 7.82Z"
                                fill="#FFFFFF"
                            />
                        </svg>

                        <span>Podcasts</span>
                    </div>
                </li>
                <li>
                    <div class="menu">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 2C9.38 2 7.25 4.13 7.25
                                 6.75C7.25 9.32 9.26 11.4 11.88
                                  11.49C11.96 11.48 12.04 11.48
                                   12.1 11.49C12.12 11.49 12.13
                                    11.49 12.15 11.49C12.16 11.49
                                     12.16 11.49 12.17 11.49C14.73
                                      11.4 16.74 9.32 16.75 
                                      6.75C16.75 4.13 14.62 2 12 2Z"
                                fill="#FFFFFF"
                            />
                            <path
                                d="M17.0809 14.1489C14.2909
                                 12.2889 9.74094 12.2889 6.93094
                                  14.1489C5.66094 14.9989 4.96094 
                                  16.1489 4.96094 17.3789C4.96094
                                   18.6089 5.66094 19.7489 6.92094
                                    20.5889C8.32094 21.5289 10.1609
                                     21.9989 12.0009 21.9989C13.8409
                                      21.9989 15.6809 21.5289 17.0809
                                       20.5889C18.3409 19.7389 19.0409
                                        18.5989 19.0409 17.3589C19.0309
                                         16.1289 18.3409 14.9889 17.0809
                                          14.1489Z"
                                fill="#FFFFFF"
                            />
                        </svg>

                        <span>Profile</span>
                    </div>
                </li>
            </ul>
        </div>
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
                <div class="card-player">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                    />
                    <div class="text-description">
                        <span>Lazy Song</span>
                        <span>Ludivic Buther</span>
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
                <div class="card-player">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                    />
                    <div class="text-description">
                        <span>Lazy Song</span>
                        <span>Ludivic Buther</span>
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
                <div class="card-player">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                    />
                    <div class="text-description">
                        <span>Lazy Song</span>
                        <span>Ludivic Buther</span>
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
                <div class="card-player">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                    />
                    <div class="text-description">
                        <span>Lazy Song</span>
                        <span>Ludivic Buther</span>
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
                <div class="card-player">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                    />
                    <div class="text-description">
                        <span>Lazy Song</span>
                        <span>Ludivic Buther</span>
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
        <div class="sidebar-bottom">
            <span class="text-small">Your account</span>
            <div class="card-profile">
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                />
                <div class="text-description">
                    <span>Plan Basic</span>
                    <span>Michael Frank</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import './SidebarComponent.css';
</script>
