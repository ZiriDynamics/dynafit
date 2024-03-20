import { useSearchParams } from 'next/navigation';
import styles from './sustainabilityOverview.module.css';

export default function SustainabilityOverview() {
    
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    if (!name || !email) return null;

    const data = [
        {
            name: 'carbon footprint',
            percentage: 15,
            icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.0002 63.6421C78.3231 71.7895 69.0831 80.4 54.8694 79.4526C43.465 78.6947 31.9775 79.3895 20.5315 79.221C18.7626 79.2 17.0145 78.021 15.2664 77.3684C16.9521 76.6737 18.6169 75.3895 20.3026 75.3684C32.1023 75.2 43.9021 75.0105 55.681 75.3684C62.0491 75.5579 67.6056 74.2737 72.6418 70.2947C75.6385 67.9368 79.0723 66.1263 82.0899 63.7895C82.9431 63.1368 83.0888 61.4947 83.5467 60.3158C82.1731 60.021 80.8204 59.5158 79.4261 59.4947C78.6769 59.4947 77.7821 60.1263 77.1785 60.7158C69.0415 68.3368 59.0107 67.2842 49.1672 66.9263C47.9602 66.8842 46.8156 65.5789 45.6294 64.8631C46.8364 64.1895 48.0226 63.0316 49.2921 62.9053C52.2056 62.5895 55.2023 63.0316 58.1158 62.6526C59.3229 62.4842 60.3426 60.9895 61.4664 60.0842C60.3426 59.0105 59.2396 57.0316 58.1158 57.0316C47.9185 57.0316 37.3258 54.7368 28.5437 62.9474C24.6521 66.5895 19.7199 65.2631 15.2456 63.9579C15.1415 63.3263 15.0375 62.6947 14.9126 62.0631C16.6399 61.6 18.3672 61.2 20.0529 60.6737C23.0912 59.7474 26.6083 59.4105 29.0431 57.621C34.2458 53.8105 39.6358 51.9789 46.0248 52.5474C49.2921 52.8421 52.601 52.5474 55.9099 52.6105C63.3602 52.6947 65.2956 54.6105 65.7742 62.8C68.9167 60.9263 71.8302 59.2 74.7437 57.4526C81.0702 53.6632 82.5477 53.7684 87.9794 58.4V63.6842L88.0002 63.6421Z" fill="black"/>
            <path d="M49.4585 36.3158C41.3839 36.4842 34.7661 34.4421 30.4582 27.7684C27.9817 23.9158 25.2347 18.7579 28.6477 15.3263C30.6663 13.3052 36.535 14 40.1769 15.1158C47.9809 17.5368 52.3512 23.6421 53.3293 31.8105C53.8496 36.1474 53.6623 40.5895 53.5166 44.9684C53.475 46.0631 52.3096 47.1158 51.6645 48.1895C50.9153 47.0737 49.6874 46 49.5417 44.8C49.2088 42.2316 49.4377 39.5789 49.4377 36.3158H49.4585ZM32.0399 18.0631C31.8109 27.4947 39.8855 33.5789 48.9799 31.1789C46.7947 22.1263 41.6545 18.0631 32.0399 18.0631Z" fill="black"/>
            <path d="M57.2001 34.6316C58.3655 33.6421 59.3645 32.2105 60.6964 31.7263C67.5847 29.2211 70.9145 25.1579 71.1434 18.2316C64.7336 16.8 60.3634 20.379 56.222 24.5684C55.785 24.4211 55.3272 24.2527 54.8901 24.1053C55.2647 22.4632 55.0982 20.3369 56.0764 19.2842C60.2593 14.7579 65.795 13.4316 71.7053 13.6632C74.7645 13.7684 75.7009 15.7684 75.6593 18.6737C75.4928 27.4105 68.3755 34.6527 58.5112 35.979C58.0742 35.5369 57.6372 35.0737 57.2001 34.6316Z" fill="black"/>
            </svg>
        },
        {
            name: 'consumption of energy',
            percentage: 10,
            icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.7169 73.4295C29.4618 68.5311 25.5761 62.5737 24.5004 39.8692C24.1272 39.6265 23.4905 39.3617 23.0295 38.9204C21.9758 37.9716 21.0098 36.9346 20 35.9417C21.3391 35.3018 22.6563 34.1324 23.9955 34.1103C34.6427 33.9559 45.2899 34.0221 55.9372 34.0221C62.0621 34.0221 68.2089 33.9338 74.3338 34.1103C75.5632 34.1545 76.7706 35.1694 78 35.721C77.2536 36.7581 76.4413 37.751 75.8047 38.8322C74.9485 40.2884 73.8289 41.7667 73.5435 43.3775C72.6654 48.3199 72.9727 53.6596 71.2385 58.249C67.9894 66.8542 60.9205 71.4437 51.4148 73.1868C51.4148 77.5114 51.6124 81.8361 51.2831 86.1387C51.1734 87.4846 49.6366 88.7203 48.7585 90C48.078 88.7203 46.8925 87.4626 46.8266 86.1608C46.5632 82.0126 46.7388 77.8645 46.7388 73.4074L46.7169 73.4295ZM30.0765 39.0087C28.3202 52.9094 31.1961 61.1615 39.4285 65.6186C46.7827 69.6123 54.0053 69.1048 60.7668 64.0961C67.704 58.933 70.3823 49.0922 67.6601 39.0087H30.0765Z" fill="black"/>
            <path d="M38.9769 27.9789H34.0455C34.0455 23.4316 33.8886 19.1368 34.1576 14.8632C34.2248 13.8737 35.7042 12.9474 36.5336 12C37.3406 12.9895 38.7752 13.9368 38.8424 14.9684C39.1114 19.2421 38.9545 23.5368 38.9545 28L38.9769 27.9789Z" fill="black"/>
            <path d="M63.9544 28.7141C62.2254 28.8021 60.9678 28.89 59.0367 29C59.0367 24.2057 58.9019 19.5653 59.149 14.969C59.2163 13.9353 60.6759 12.9897 61.4843 12C62.3152 13.0556 63.7748 14.0453 63.8421 15.1449C64.1116 19.6093 63.9544 24.0957 63.9544 28.7361V28.7141Z" fill="black"/>
            </svg>
        },
        {
            name: 'supply chain miles',
            percentage: 17,
            icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.9506 84C30.5995 84 15.0198 68.4754 15 49.168C14.9803 29.8016 30.4415 14.1588 49.7137 14.0012C69.0846 13.8436 85 29.7031 85 49.168C85 68.3374 69.2623 84 49.9506 84ZM40.8674 41.8786C40.67 42.2529 40.4725 42.6075 40.275 42.9818C40.8872 43.6123 41.3808 44.6367 42.1114 44.8338C46.5543 45.9961 50.9972 47.3949 55.5388 47.9072C60.1199 48.4194 63.3385 50.3304 64.6812 54.5662C65.9845 58.6838 65.0959 62.3679 61.6009 65.5202C59.3498 67.5494 57.4937 70.2288 56.0917 72.9476C54.4725 76.1195 52.0635 78.2866 48.8844 77.0454C46.653 76.1786 44.6192 73.5189 43.5529 71.1941C41.3413 66.2688 40.0578 60.9297 37.8463 56.0044C37.2144 54.6056 34.7264 53.9555 33.0085 53.1674C28.6051 51.1579 24.1425 49.2666 19.8181 47.3949C16.9549 61.5405 29.5332 77.2621 46.2384 79.3505C62.134 81.36 78.622 69.4998 79.1749 55.6498C70.0522 52.2415 67.3865 49.168 66.5374 41.5042C65.8068 34.9831 71.6911 34.6482 75.5021 32.1264C69.4598 23.6548 61.6798 19.1038 52.5571 18.6901C51.7475 22.2363 51.787 25.4673 50.3258 27.733C48.5289 30.5109 47.4429 32.2643 50.0691 35.1998C51.0959 36.3425 51.2341 39.5341 50.3456 40.8147C49.4767 42.0953 46.8505 42.4105 44.9154 42.6666C43.6121 42.8439 42.2102 42.1544 40.8477 41.8589L40.8674 41.8786ZM46.7715 38.352C42.5261 31.9294 42.6248 31.9885 46.6925 25.4082C47.3837 24.2656 47.1862 22.0196 46.4951 20.7784C45.9817 19.8722 43.8491 19.1826 42.7038 19.4584C33.6996 21.6256 26.9464 26.8661 22.7997 35.1407C22.1284 36.4804 22.3258 38.4702 22.6418 40.0463C23.8463 46.2917 29.0593 47.6116 34.134 48.9119C39.7814 50.3501 43.3357 53.4038 43.4739 59.6295C43.4937 60.6342 44.2835 61.6193 44.7377 62.6044C45.8237 65.0079 46.89 67.4115 47.9958 69.815C48.4894 70.8789 49.0621 71.9231 49.5952 72.987C50.4838 72.0216 51.4711 71.1547 52.2214 70.1106C53.8011 67.9237 54.8477 65.1655 56.842 63.55C59.4288 61.4814 61.7983 59.6886 60.653 56.0635C59.4683 52.2809 56.0917 52.931 53.0705 52.3006C48.1143 51.2367 43.1185 49.8182 38.6361 47.5328C37.1157 46.7645 36.1086 42.5681 36.7997 40.6374C37.3526 39.0613 40.749 38.3323 43 37.6034C43.9083 37.3078 45.1326 37.9974 46.7715 38.3717V38.352ZM80.9718 51.02C80.0832 45.8582 79.3131 41.2481 78.5233 36.638C77.9506 36.3819 77.378 36.1455 76.8054 35.8893C74.8505 37.7807 71.3554 39.5735 71.2172 41.583C70.8618 47.0206 73.6657 49.4636 80.952 51.02H80.9718Z" fill="black"/>
            </svg>
        },
        {
            name: 'recycling rate',
            percentage: 55,
            icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M89 73.5766C86.0594 77.1906 82.2877 78.3093 77.685 78.1372C70.0778 77.8575 62.4706 78.0511 53.2652 78.0511C55.5878 80.3314 57.2073 81.5361 58.3154 83.128C58.9759 84.0745 58.8694 85.5804 59.1038 86.8281C57.8466 86.8281 56.2058 87.3013 55.4174 86.6775C51.944 83.9024 48.5986 80.9338 45.5088 77.7285C44.8269 77.0186 44.8269 74.4586 45.5301 73.7487C48.6199 70.5434 51.9653 67.5747 55.4387 64.7782C56.2058 64.1543 57.8679 64.6491 59.1038 64.6061C58.8694 65.8753 58.9972 67.3811 58.3154 68.3277C57.2499 69.855 55.6518 71.0167 53.2652 73.3185C63.1524 73.3185 71.7612 73.5336 80.3486 73.2324C84.5038 73.0818 85.9742 69.769 83.9285 65.8753C82.096 62.3903 79.7946 59.1635 78.0047 55.6786C77.5359 54.7535 78.1965 53.2477 78.3456 52C79.5602 52.4087 81.2436 52.4518 81.8829 53.3122C84.4186 56.6896 86.6347 60.3252 88.9574 63.8532V73.5551L89 73.5766Z" fill="black"/>
            <path d="M31.0992 45.4053C26.4317 53.1051 22.3084 59.546 18.541 66.2177C16.3642 70.0571 18.1851 72.9944 22.7689 73.3091C26.055 73.5399 29.4039 73.1622 32.6899 73.4979C33.883 73.6238 34.9714 74.9455 36.1016 75.7008C34.9504 76.4351 33.862 77.673 32.6481 77.8198C29.7178 78.1345 26.7457 77.9457 23.7736 77.9247C13.9153 77.8408 10.2107 71.1691 15.234 62.4833C17.1596 59.1684 19.1898 55.9164 21.1782 52.6225C23.0619 49.4965 24.9457 46.3704 27.4783 42.1953C24.3387 43.0765 22.2247 43.9157 20.048 44.1885C18.9596 44.3143 17.7247 43.3912 16.5735 42.9296C17.2851 41.9016 17.8084 40.37 18.7712 39.9714C22.6224 38.3979 26.5782 36.9293 30.6178 36.0271C31.769 35.7754 34.1969 37.3279 34.6155 38.5238C35.8086 42.1324 36.4783 45.9718 36.9807 49.7692C37.1481 51.028 36.1853 52.4547 35.7248 53.7974C34.6365 52.7694 33.2969 51.8882 32.5225 50.6504C31.8527 49.5804 31.7899 48.0908 31.1411 45.4473L31.0992 45.4053Z" fill="black"/>
            <path d="M72.6273 37.3056C73.3951 34.0276 73.6365 31.8637 74.4701 29.9569C74.9089 28.9499 76.4445 28.4143 77.4756 27.6644C78.0021 28.6714 79.1209 29.7641 78.9893 30.6853C78.2654 35.2488 77.3878 39.8337 76.1374 44.2686C75.8961 45.147 73.5048 46.2183 72.4079 45.9612C68.1739 44.9756 63.9837 43.6473 59.9471 42.0404C58.916 41.6334 58.4992 39.7051 57.8191 38.4839C59.0696 38.184 60.364 37.5198 61.5486 37.6912C63.4353 37.9483 65.2561 38.741 68.1958 39.6409C64.0057 32.8707 60.5833 27.0217 56.81 21.387C53.5193 16.4807 48.8246 16.5664 45.3803 21.387C43.9324 23.4223 42.8794 25.7791 41.2559 27.6859C40.51 28.5643 38.8866 28.7357 37.68 29.2284C37.4607 27.9644 36.6709 26.379 37.1535 25.4791C38.8647 22.3511 40.6636 19.1374 43.0549 16.5236C48.0348 11.1031 56.4151 12.0672 60.8027 18.5161C64.7077 24.2793 68.2397 30.2783 72.6273 37.3056Z" fill="black"/>
            </svg>
        },
        {
            name: 'water waste',
            percentage: 65,
            icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M79 57.4009C78.269 69.0717 73.2114 77.1469 63.0961 81.7248C53.5341 86.0473 42.0951 84.1022 34.6865 76.8129C26.8433 69.111 23.2871 59.5621 28.3645 49.5614C34.2321 37.9889 41.7988 27.2612 48.8716 16.3174C50.8275 13.2916 54.028 13.2523 56.2407 16.062C64.7359 26.8682 72.8953 37.9299 77.5973 51.0154C78.4073 53.2552 78.6444 55.7112 78.9802 57.3812L79 57.4009ZM52.2104 17.7713C46.165 27.2415 40.4949 35.6311 35.4175 44.3351C33.2641 48.0092 31.644 52.2925 31.0118 56.4774C29.7672 64.8081 34.7853 73.1191 42.5495 77.1272C50.5311 81.2729 60.271 80.0744 67.0277 74.1211C73.8436 68.1286 76.1551 59.8176 73.0731 51.4083C68.6082 39.2856 60.8044 29.2063 52.2104 17.7517V17.7713Z" fill="black"/>
            <path d="M51.9474 73C43.8751 72.9608 36.7501 65.8824 37.0067 58.9412C37.0462 57.9412 38.112 56.9804 38.7041 56C39.533 56.7843 40.9541 57.4706 41.0922 58.3529C42.0001 64.6667 45.6119 67.9804 51.8487 68.9608C52.6776 69.098 53.2895 70.5882 54 71.4314C53.1118 72.1176 52.2237 72.8039 51.9671 73H51.9474Z" fill="black"/>
            </svg>
        },
    ]
    return (
        <div className={styles.sustainabilityOverview}>
        <h1>Sustainability Overview</h1>
        {
            data.map((item, index) => {
                return (
                    <div key={index} className={styles.item} style={{ '--color': (item.percentage < 56 ? '#3ce877' : '#ffae14') } as React.CSSProperties}>
                        <div className={styles.header}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.percentage}><span>{item.percentage}</span>|100</div>
                        </div>
                        <div className={styles.bar} style={{'--percentage': item.percentage + '%'} as React.CSSProperties}>
                            <div className={styles.iconContainer} style={{'--percentage': item.percentage + '%'} as React.CSSProperties}>
                                {item.icon}
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <img className={styles.img} src={'/skiier_with_dog.png'} alt="skiier with dog" width={500} height={500} />
        </div>
    );
}