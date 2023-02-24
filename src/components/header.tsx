import * as headers from "./style.css";

const AboveHeader = () => {

	// const bgImage = "./img/header_bg.jpg";
	// const fourMenu = {
	// 	"news": "お知らせ",
	// 	"accsess": "交通案内",
	// 	"reserve": "宿泊予約",
	// 	"contact": "お問合せ"
	// }
	return (
		<div className={headers.bgWrapper}>
			<img src="./img/header_01.jpg" alt="右にメニュー" />
			<ul className={headers.ul__Menu}>
				<li className={headers.li__Menu}><a href="./news">お知らせ</a></li>
				<li className={headers.li__Menu}><a href="./access">交通案内</a></li>
				<li className={headers.li__Menu}><a href="./reserve">宿泊予約</a></li>
				<li className={headers.li__Menu}><a href="./contact">お問合せ</a></li>
			</ul>
			<img src="./img/logo.jpg" alt="白骨温泉" className={headers.logo__Image} />
		</div>
	);
}

// const BelowHeader = () => {

// 	return (
// 		<div class="head-area">
// 			<img src="./img/header_image.jpg" alt ="胡紛温泉メイン画像" class="head-image" />
// 			<div class="menu-navi">
// 					<div class="head-belt"></div>
// 					<ul class="head-menu">
// 							<li><a href="./"><img src="../img/nav_01.jpg" alt="ホーム" /></a></li>
// 							<li><a href="./spa"><img src="../img/nav_02.jpg" alt="温泉" /></a></li>
// 							<li><a href="./meal"><img src="../img/nav_03.jpg" alt="料理" /></a></li>
// 							<li><a href="./room"><img src="../img/nav_04.jpg" alt="客室" /></a></li>
// 							<li><a href="./factory"><img src="../img/nav_05.jpg" alt="館内" /></a></li>
// 							<li><a href="./access"><img src="../img/nav_06.jpg" alt="交通" /></a></li>
// 					</ul>
// 			</div>
// 		</div>
// 	);
// }

export const Header = () => {

	return (
		<header style={{display: "block", width: "76vw", margin: "0 auto"}}>
			<AboveHeader />
			{/* <BelowHeader /> */}
		</header>
	);
}