import styles from "./loadingScreen.module.css";

export default function LoadingScreen() {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.loadingScreenContent}>
                <div className={styles.logoContainer}>
                    <svg className={styles.icon} viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M68.2911 116.902C64.4411 120.542 59.9311 124.812 55.2711 129.232C52.0811 126.122 48.5011 122.672 44.9511 119.182C36.2911 110.662 27.5911 102.172 19.0011 93.582C14.4311 89.002 15.2111 81.822 20.4511 78.542C24.3911 76.082 28.9811 76.692 32.7411 80.312C36.8811 84.292 41.0211 88.272 45.0011 92.412C52.7411 100.432 60.3611 108.562 68.2811 116.902H68.2911Z" fill="currentColor" />
                        <path d="M87.5711 138.192V157.482C83.3611 157.482 79.0711 157.442 74.7811 157.482C61.8711 157.632 48.9611 157.862 36.0511 157.922C33.9311 157.932 31.6711 157.632 29.7311 156.842C25.8011 155.252 23.6911 150.652 24.5511 146.512C25.4711 142.082 28.9711 138.982 33.4911 138.862C41.7311 138.652 49.9811 138.552 58.2211 138.422C67.5511 138.272 76.8711 138.142 86.2011 138.012C86.5311 138.012 86.8511 138.082 87.5711 138.172V138.192Z" fill="currentColor" />
                        <path d="M138.291 122.192H157.281C157.281 123.782 157.271 125.332 157.281 126.882C157.441 142.952 157.651 159.012 157.731 175.082C157.771 183.092 150.041 187.842 143.361 183.982C139.941 182.002 138.631 178.832 138.601 174.962C138.541 167.392 138.361 159.812 138.291 152.242C138.201 142.752 138.171 133.252 138.121 123.762C138.121 123.352 138.201 122.942 138.291 122.192Z" fill="currentColor" />
                        <path d="M116.201 140.842C120.641 145.102 125.141 149.402 129.841 153.912C126.391 157.522 123.011 161.062 119.621 164.582C110.741 173.832 101.871 183.102 92.9511 192.312C88.9511 196.432 83.2711 196.682 79.3211 193.062C75.2811 189.352 75.0311 183.572 79.1111 179.272C91.2011 166.522 103.411 153.882 115.571 141.202C115.681 141.092 115.851 141.032 116.201 140.832V140.842Z" fill="currentColor" />
                        <path d="M71.4111 87.5719H52.2711C52.2711 83.3219 52.3211 79.0419 52.2711 74.7619C52.1111 62.3619 51.8911 49.9619 51.7411 37.5719C51.7211 35.8319 51.6711 34.0419 52.0511 32.3719C53.1611 27.5919 57.6311 24.4819 62.2411 25.0519C67.1611 25.6619 70.7111 29.5119 70.8111 34.5219C71.0411 47.1719 71.2411 59.8119 71.4111 72.4619C71.4811 77.3519 71.4211 82.2519 71.4211 87.5819L71.4111 87.5719Z" fill="currentColor" />
                        <path d="M122.251 71.622V52.372C125.721 52.372 129.191 52.432 132.661 52.362C146.481 52.092 160.301 51.772 174.111 51.492C178.381 51.402 181.811 52.992 183.731 56.942C186.821 63.292 182.421 70.362 175.221 70.592C167.321 70.842 159.411 70.962 151.501 71.112C142.681 71.292 133.851 71.452 125.031 71.612C124.221 71.632 123.411 71.612 122.251 71.612V71.622Z" fill="currentColor" />
                        <path d="M140.991 92.9819C145.201 89.1719 149.811 84.9819 154.631 80.6119C156.901 82.8219 159.741 85.5719 162.581 88.3319C172.311 97.7919 182.051 107.232 191.761 116.712C194.711 119.592 195.641 123.052 194.251 126.972C192.931 130.692 190.191 132.782 186.291 133.242C183.091 133.622 180.431 132.382 178.171 130.182C169.101 121.362 159.991 112.582 150.981 103.692C147.611 100.362 144.501 96.7819 140.971 92.9819H140.991Z" fill="currentColor" />
                        <path d="M93.3911 69.0319C89.0711 64.5019 84.7711 59.9919 79.7611 54.7319C84.8611 49.9319 90.3111 45.0219 95.5111 39.8719C102.561 32.9019 109.421 25.7419 116.371 18.6819C119.311 15.6919 122.711 14.0819 126.961 15.5519C130.771 16.8619 133.031 19.5419 133.501 23.5719C133.861 26.6619 132.801 29.2819 130.631 31.4919C122.281 39.9919 113.971 48.5219 105.601 57.0019C101.681 60.9719 97.6611 64.8319 93.3811 69.0319H93.3911Z" fill="currentColor" />
                    </svg>

                    <svg className={styles.wordMark} viewBox="0 0 290 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80.0767 40.792H76.9067C52.6667 40.792 28.4167 40.792 4.17671 40.792C0.0867143 40.792 0.0266901 40.732 0.0266901 36.562C0.0266901 32.142 0.0166901 27.732 0.0266901 23.312C0.0366901 20.072 0.216716 19.882 3.39672 19.882C15.1467 19.872 26.8867 19.882 38.6367 19.882C60.1267 19.882 81.6267 19.852 103.117 19.902C111.127 19.922 116.187 27.162 113.077 34.362C112.047 36.732 110.127 38.762 108.427 40.802C92.8867 59.492 77.3067 78.152 61.7567 96.822C52.6467 107.762 43.5567 118.722 34.4667 129.672C34.1667 130.042 33.9767 130.502 33.4767 131.362C34.8867 131.492 35.9667 131.692 37.0567 131.692C61.2967 131.712 85.5467 131.702 109.787 131.702C112.573 131.702 113.967 133.132 113.967 135.992C113.967 140.572 113.907 145.162 113.997 149.742C114.037 151.622 113.507 152.392 111.477 152.382C77.7367 152.332 43.9967 152.362 10.2467 152.322C6.02669 152.322 2.87672 150.242 1.08672 146.482C-0.813282 142.492 -0.173304 138.662 2.6267 135.272C9.0867 127.432 15.5767 119.622 22.0767 111.812C31.9767 99.912 41.9067 88.042 51.8067 76.142C60.7467 65.392 69.6767 54.632 78.6067 43.862C79.2267 43.112 79.7667 42.302 80.3467 41.522C80.2567 41.282 80.1567 41.042 80.0667 40.792H80.0767Z" fill="currentColor" />
                        <path d="M174.957 90.2419C174.957 70.9919 174.957 51.7519 174.957 32.5019C174.957 24.1419 179.217 19.8719 187.547 19.8719C206.287 19.8719 225.037 19.8719 243.777 19.8719C247.287 19.8719 247.297 19.8819 247.297 23.3019C247.297 28.1319 247.217 32.9719 247.337 37.8019C247.397 40.0719 246.627 40.8519 244.317 40.8419C229.327 40.7619 214.327 40.8019 199.337 40.8019C195.907 40.8019 195.837 40.8619 195.837 44.2919C195.837 79.0319 195.837 113.782 195.837 148.522C195.837 151.069 194.557 152.342 191.997 152.342C187.337 152.342 182.667 152.222 178.007 152.392C175.547 152.482 174.917 151.592 174.927 149.232C175.007 129.572 174.977 109.902 174.977 90.2419H174.957Z" fill="currentColor" />
                        <path d="M154.967 89.9919C154.967 109.652 154.967 129.302 154.967 148.962C154.967 152.332 154.947 152.342 151.687 152.342C146.777 152.342 141.857 152.242 136.947 152.382C134.637 152.452 133.947 151.652 133.957 149.372C134.037 132.052 133.997 114.722 133.997 97.4019C133.997 75.4919 134.017 53.5919 133.977 31.6819C133.977 28.0919 134.797 24.9119 137.587 22.4919C140.947 19.5819 144.727 19.0419 148.757 20.8119C152.827 22.5919 154.837 25.8819 154.947 30.2619C155.047 34.4219 154.977 38.5919 154.977 42.7519C154.977 58.4919 154.977 74.2319 154.977 89.9819L154.967 89.9919Z" fill="currentColor" />
                        <path d="M288.447 89.8419C288.447 109.502 288.447 129.172 288.447 148.832C288.447 152.332 288.427 152.342 285.027 152.342C280.197 152.342 275.357 152.242 270.537 152.392C268.217 152.462 267.507 151.652 267.527 149.382C267.617 138.222 267.567 127.052 267.567 115.892C267.567 87.8119 267.577 59.7319 267.557 31.6519C267.557 27.6019 268.487 24.0419 272.097 21.6819C275.427 19.5119 279.017 19.1019 282.547 20.9219C286.367 22.9019 288.477 26.1119 288.467 30.5919C288.437 50.3419 288.457 70.0819 288.457 89.8319L288.447 89.8419Z" fill="currentColor" />
                        <path d="M278.047 168.822C280.707 168.822 283.377 168.872 286.037 168.802C287.667 168.762 288.497 169.282 288.467 171.082C288.397 176.492 288.417 181.902 288.447 187.312C288.447 188.902 287.777 189.552 286.197 189.542C280.707 189.502 275.217 189.502 269.717 189.542C268.077 189.552 267.547 188.762 267.557 187.232C267.597 181.822 267.597 176.412 267.557 171.002C267.537 169.372 268.257 168.782 269.817 168.802C272.567 168.852 275.307 168.812 278.057 168.812L278.047 168.822ZM278.187 186.132C278.967 184.732 279.637 184.082 279.647 183.422C279.677 181.682 280.217 180.842 282.107 180.812C282.747 180.802 283.737 179.902 283.937 179.222C284.317 177.902 283.447 177.232 282.087 177.332C280.407 177.452 279.747 176.732 279.607 175.022C279.557 174.382 278.537 173.562 277.807 173.352C277.447 173.252 276.317 174.342 276.277 174.932C276.187 176.612 275.547 177.262 273.877 177.422C273.277 177.472 272.367 178.462 272.337 179.062C272.307 179.642 273.207 180.762 273.737 180.792C275.537 180.882 276.217 181.572 276.267 183.382C276.287 184.072 277.177 184.742 278.177 186.132H278.187Z" fill="currentColor" />
                        <path d="M157.347 177.302C155.877 179.482 154.417 181.662 152.637 184.312C150.877 181.752 149.367 179.552 147.447 176.752C147.177 178.172 146.927 178.982 146.897 179.792C146.837 181.962 146.807 184.132 146.897 186.292C146.957 187.972 146.617 188.952 144.597 188.912C142.697 188.882 142.437 187.922 142.447 186.382C142.497 181.302 142.417 176.212 142.507 171.132C142.527 170.212 143.037 168.582 143.487 168.522C145.097 168.312 146.997 167.612 148.217 169.592C149.547 171.762 150.947 173.892 152.627 176.532C154.167 174.152 155.437 172.262 156.647 170.332C157.757 168.552 160.147 167.602 161.947 168.472C162.387 168.682 162.787 169.482 162.797 170.012C162.857 175.682 162.807 181.342 162.857 187.012C162.867 188.682 161.907 188.872 160.587 188.882C159.267 188.882 158.297 188.722 158.347 187.022C158.417 184.692 158.387 182.352 158.347 180.022C158.327 179.152 158.167 178.282 158.067 177.412C157.827 177.372 157.587 177.332 157.357 177.292L157.347 177.302Z" fill="currentColor" />
                        <path d="M75.707 177.482C75.707 180.502 75.647 183.532 75.727 186.552C75.777 188.272 75.127 188.912 73.397 188.902C71.727 188.902 70.997 188.422 71.017 186.622C71.097 181.462 70.997 176.302 71.087 171.142C71.107 170.212 71.727 168.502 71.997 168.512C73.457 168.582 75.367 168.632 76.247 169.542C78.487 171.852 80.267 174.612 82.237 177.192C82.777 177.892 83.357 178.552 83.917 179.242L84.817 179.092C84.817 177.272 84.817 175.452 84.817 173.632C84.817 172.712 84.857 171.802 84.817 170.882C84.727 169.282 84.937 168.222 87.047 168.252C89.017 168.282 89.417 169.072 89.387 170.812C89.307 175.892 89.417 180.972 89.317 186.042C89.297 186.962 88.577 188.682 88.327 188.652C86.957 188.512 85.187 188.332 84.377 187.432C81.997 184.772 80.017 181.772 77.877 178.912C77.457 178.352 76.987 177.842 76.537 177.302L75.697 177.472L75.707 177.482Z" fill="currentColor" />
                        <path d="M1.39697 168.522C5.22697 168.522 8.74697 168.132 12.147 168.612C17.607 169.382 20.627 173.802 20.287 179.622C19.987 184.592 15.917 188.512 10.537 188.832C8.13696 188.972 5.71696 188.982 3.31696 188.792C2.63696 188.742 1.49697 187.782 1.48697 187.222C1.35697 181.092 1.40695 174.952 1.40695 168.522H1.39697ZM5.98697 184.942C7.27697 184.942 8.09695 184.912 8.90695 184.942C11.717 185.082 13.877 183.822 14.887 181.332C15.797 179.092 15.807 176.642 14.117 174.522C12.307 172.252 9.86696 171.772 7.19696 172.082C6.75696 172.132 6.04696 172.872 6.03696 173.312C5.94696 177.102 5.98697 180.892 5.98697 184.932V184.942Z" fill="currentColor" />
                        <path d="M126.197 188.452C122.117 189.312 121.697 189.192 120.377 186.112C119.787 184.742 118.977 184.162 117.547 184.242C116.547 184.292 115.537 184.342 114.557 184.242C112.287 183.992 110.827 184.702 109.997 187.022C109.227 189.172 108.467 189.272 104.897 188.402C106.007 185.632 107.067 182.902 108.187 180.192C109.487 177.042 110.827 173.912 112.167 170.782C112.817 169.262 113.617 168.192 115.657 168.252C117.607 168.312 118.217 169.402 118.817 170.832C121.237 176.642 123.677 182.442 126.187 188.452H126.197ZM113.067 179.992H117.867C117.037 178.102 116.427 176.702 115.807 175.292C115.577 175.322 115.337 175.352 115.107 175.382C114.497 176.762 113.877 178.142 113.057 179.992H113.067Z" fill="currentColor" />
                        <path d="M244.627 168.062C246.227 168.482 247.867 168.772 249.397 169.362C250.387 169.742 251.817 170.262 250.907 171.882C250.187 173.152 249.407 174.362 247.577 173.272C246.667 172.722 245.547 172.062 244.597 172.162C243.567 172.272 242.617 173.202 241.627 173.782C242.317 174.482 242.887 175.442 243.727 175.822C245.307 176.542 247.087 176.792 248.687 177.472C250.997 178.462 252.467 180.112 252.337 182.862C252.197 185.642 250.727 187.402 248.247 188.262C244.657 189.502 241.147 188.982 237.927 187.062C237.307 186.692 236.587 185.302 236.817 184.912C237.467 183.792 238.207 182.412 240.147 183.342C241.747 184.102 243.537 184.602 245.297 184.812C245.967 184.892 246.777 183.822 247.527 183.282C246.917 182.602 246.427 181.682 245.667 181.292C244.577 180.732 243.297 180.552 242.097 180.212C238.217 179.102 236.467 176.942 236.837 173.722C237.217 170.402 239.817 168.392 243.817 168.332C244.067 168.332 244.317 168.332 244.567 168.332C244.587 168.242 244.617 168.152 244.637 168.072L244.627 168.062Z" fill="currentColor" />
                        <path d="M212.937 167.942C214.907 168.512 216.907 168.982 218.827 169.692C219.827 170.062 220.927 170.862 219.877 172.142C219.067 173.132 218.377 174.862 216.537 173.532C214.407 171.992 212.247 171.492 209.847 173.052C207.407 174.642 206.397 177.472 207.277 180.762C207.897 183.082 210.247 185.042 212.857 184.932C214.167 184.872 215.547 184.212 216.707 183.512C218.507 182.422 219.497 183.562 220.087 184.782C220.327 185.282 219.567 186.712 218.887 187.162C214.127 190.332 207.567 189.232 204.067 184.822C200.757 180.642 201.337 174.782 205.477 170.862C207.527 168.922 210.037 168.232 212.917 167.942H212.937Z" fill="currentColor" />
                        <path d="M35.647 168.682C40.337 167.842 40.647 168.002 42.657 171.522C43.457 172.932 44.367 174.272 45.507 176.092C46.757 174.082 47.727 172.592 48.637 171.052C50.437 168.002 51.1169 167.732 55.2469 168.802C53.5769 171.462 52.147 174.172 50.307 176.572C48.027 179.542 47.307 182.772 47.707 186.362C47.967 188.652 46.667 189.212 44.857 188.782C44.147 188.612 43.037 187.552 43.117 187.072C44.087 181.312 40.937 177.072 38.087 172.692C37.287 171.462 36.567 170.182 35.657 168.682H35.647Z" fill="currentColor" />
                        <path d="M185.487 178.662C185.487 181.412 185.447 184.152 185.497 186.902C185.527 188.452 184.807 188.942 183.367 188.892C182.017 188.852 180.867 188.822 180.877 186.972C180.917 181.392 180.927 175.822 180.867 170.242C180.847 168.392 181.907 168.362 183.277 168.302C184.867 168.232 185.557 168.772 185.507 170.422C185.427 173.162 185.487 175.912 185.487 178.662Z" fill="currentColor" />
                    </svg>
                </div>
                <div className={styles.loadingText}>ADVANCING CIRCULAR ECONOMY</div>
            </div>
        </div>
    );
}