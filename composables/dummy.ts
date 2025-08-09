import homeIcon from '~/assets/icons/Read.svg'
import reelsIcon from '~/assets/icons/reel.svg'
import starIcon from '~/assets/icons/star.svg'
import tipIcon from '~/assets/icons/highlight.svg'
import filmIcon from '~/assets/icons/video.svg'
import bookIcon from '~/assets/icons/book_open.svg'
import ball from "~/assets/icons/soccer.svg"
import dubi from "~/assets/icons/ani_Duabi.svg"
import basket from "~/assets/icons/basket.svg"
import esport from "~/assets/icons/controller.svg"
import casino from "~/assets/icons/ani_Casino.svg"
import userr from '~/assets/icons/account.svg'
import homee from '~/assets/icons/home.svg'
import point from '~/assets/icons/target.svg'
import wallet from '~/assets/icons/wallet.svg'
import graph from '~/assets/icons/graph.svg'
import logoutt from '~/assets/icons/logout.svg'
import silvercoin from '~/assets/icons/Frame 2971.svg'
import kgg from '~/assets/icons/KG.svg'
import hott from '~/assets/icons/hotThamnail.svg'
import basketPlayer from '~/assets/image/basketmatch.jpg'
import esportPlayer from '~/assets/image/esport.jpg'
import footballMatch from '~/assets/image/match.jpg'
import livee from '~/assets/icons/live.svg'
import ringGold from '~/assets/icons/Blingking_Status.svg'
import ringBlack from '~/assets/icons/ringBlack.svg'
export const topNavItem = [
  {
    name: 'lịch trực tiếp',
    dropdown: true,
    items: [
      { label: 'Bóng đá', icon: ball },
      { label: 'Chuyển nhượng', icon: dubi },
      { label: 'Bình luận', icon: basket },
      { label: 'Bình luận', icon: esport },
      { label: 'Bình luận', icon: casino }
    ]
  },
  {
    name: 'lịch trực tiếp',
    dropdown: true,
    items: [
      { label: 'Bóng đá', icon: ball },
      { label: 'Chuyển nhượng', icon: dubi },
      { label: 'Bình luận', icon: basket },
      { label: 'Bình luận', icon: esport },
      { label: 'Bình luận', icon: casino }
    ]
  },
  { name: 'tỷ lệ kèo', path: '/' },
  {
    name: 'lịch trực tiếp',
    dropdown: true,
    items: [
      { label: 'Bóng đá', icon: ball },
      { label: 'Chuyển nhượng', icon: dubi },
      { label: 'Bình luận', icon: basket },
      { label: 'Bình luận', icon: esport },
      { label: 'Bình luận', icon: casino }
    ]
  },
  { name: 'phòng chat', path: '/' },
  { name: 'tin tức', path: '/' },
]

export const bottomNavItem = [
  { name: 'Bảng Tin', path: '/', icon: homeIcon },
  { name: 'Reels', path: '/', icon: reelsIcon },
  { name: 'Highlight', path: '/', icon: starIcon },
  { name: 'Tip Kèo', path: '/', icon: tipIcon },
  { name: 'Phim Ảnh', path: '/', icon: filmIcon },
  { name: 'Truyện Tranh', path: '/', icon: bookIcon },
]
export const profileItems = [
  {
    label: 'Trung tâm Tài khoản',
    icon: userr
  },
  {
    label: 'Trang cá nhân',
    icon: homee
  },
  {
    label: 'Nhiệm vụ',
    icon: point
  },
  {
    label: 'Ví của bạn',
    icon: wallet
  },
  {
    label: 'lịch sử giao dịch',
    icon: graph
  },
  {
    label: 'Thoát tài khoản',
    icon: logoutt
  }
]
export const coinItem = [
  {
    label: '20.000',
    icon: silvercoin
  },
  {
    label: '20.000',
    icon: kgg
  },
]
export const cardItem = [
  {
    img: basketPlayer,
    title: "Team A vs Team B",
    name: 'BLV Noname',
    topIcon: hott,
    bottomIcon: basket,
    logo : livee
  },
  {
    img: esportPlayer,
    title: "Team A vs Team B",
    name: 'BLV Noname',
    topIcon: hott,
    bottomIcon: esport,
    logo : ringGold
  },
  {
    img: footballMatch,
    title: "Team A vs Team B",
    name: 'BLV Noname',
    topIcon: hott,
    bottomIcon: ball,
    logo : ringBlack
  },
  {
    img: basketPlayer,
    title: "Team A vs Team B",
    name: 'BLV Noname',
    topIcon: hott,
    bottomIcon: basket,
    logo : ringBlack
  },
  {
    img: esportPlayer,
    title: "Team A vs Team B",
    name: 'BLV Noname',
    topIcon: hott,
    bottomIcon: esport,
    logo : ringBlack
  }
]