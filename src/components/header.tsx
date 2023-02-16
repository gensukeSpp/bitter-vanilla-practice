import { headerAbove } from "./style.css";

const AboveHeader = () => {

	return (
		<div className={headerAbove.wrapper}>
			<div className={headerAbove.belt}>
				<img src="../../img/header_01.jpg" alt="右にメニュー" className={headerAbove.belt__Image} />
				<ul className={headerAbove.right__List}>
					<li><span></span><a href="./news">お知らせ</a></li>
					<li><span></span><a href="./access">交通案内</a></li>
					<li><span></span><a href="./reserve">宿泊予約</a></li>
					<li><span></span><a href="./contact">お問合せ</a></li>
				</ul>    
			</div>
			<div class="top-logo"><img src="../../img/logo.jpg" alt="白骨温泉" /></div>
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
		<header>
			<AboveHeader />
			{/* <BelowHeader /> */}
		</header>
	);
}