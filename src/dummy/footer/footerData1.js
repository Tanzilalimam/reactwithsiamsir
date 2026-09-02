import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";

const footerData = {

footerMenu: [
    {
        id:0,
        label: 'home',
        url: '/'
    },
    {
        id:1,
        label: 'our services',
        url: '/service'
    },
    {
        id:2,
        label: 'projects',
        url: '/project'
    },
    {
        id:3,
        label: 'about us',
        url: '/about'
    },
    {
        id:4,
        label: 'blog',
        url: '/blog'
    },
    {
        id:5,
        label: 'contact',
        url: '/contact'
    },
],

footerService: [
    {
        id: 0,
        label: 'resedential cleaning',
        url: '/resedential cleaning'
    },
    {
        id: 0,
        label: 'commercial cleaning',
        url: '/commercial cleaning'
    },
    {
        id: 0,
        label: 'deep cleaning',
        url: '/deep cleaning'
    },
    {
        id: 0,
        label: 'move-In/move-Out cleaning',
        url: '/move-In/move-Out cleaning'
    },
    {
        id: 0,
        label: 'post-construction cleaning',
        url: '/post-construction cleaning'
    },
    {
        id: 0,
        label: 'carpet and upholstery cleaning',
        url: '/carpet and upholstery cleaning'
    },
],

footerContact: [
    {
        id: 0,
        icon: CiClock2,
        label: 'we are open'
    },
    {
        id: 1,
        icon: CiLocationOn,
        label: 'office location'
    },
    {
        id: 2,
        icon: FaEnvelope,
        label: 'send a message'
    },
]

}
export default footerData
