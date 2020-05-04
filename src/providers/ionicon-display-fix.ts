import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

const currentIcons = Object.keys(allIcons).map(i => {
    const key = i.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
    console.log(allIcons[i])
    if (typeof allIcons[i] === 'string') {
        return {
            [key]: allIcons[i],
        }
    }
    return {
        ['ios-' + key]: allIcons[i].ios,
        ['md-' + key]: allIcons[i].md,
    };
});
console.log(allIcons);
const iconsObject = Object.assign({}, ...currentIcons);
addIcons(iconsObject);

//addIcons({'icon-coupon-dark': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.99 14"><g id="Layer_2" data-name="Layer 2"><g id="Content"><g id="Coupon"><polygon points="5.6 5.93 3.03 10.2 3.37 10.38 5.94 6.11 5.6 5.93"/><path d="M6.42,8.56a1.21,1.21,0,0,0-.32-.22,1,1,0,0,0-.8,0A1.21,1.21,0,0,0,5,8.56a1,1,0,0,0-.22.33.85.85,0,0,0-.08.39.87.87,0,0,0,.08.4A1.06,1.06,0,0,0,5,10a1.21,1.21,0,0,0,.32.22,1,1,0,0,0,.8,0A1.21,1.21,0,0,0,6.42,10a1.06,1.06,0,0,0,.22-.33.87.87,0,0,0,.08-.4.85.85,0,0,0-.08-.39A1,1,0,0,0,6.42,8.56ZM6.11,9.69a.58.58,0,0,1-.82,0,.54.54,0,0,1-.16-.41.54.54,0,0,1,.16-.4.58.58,0,0,1,.82,0,.54.54,0,0,1,.16.4A.54.54,0,0,1,6.11,9.69Z"/><path d="M3.65,8A.87.87,0,0,0,4,7.75a.87.87,0,0,0,.22-.32A.9.9,0,0,0,4.27,7a.92.92,0,0,0-.08-.4A.87.87,0,0,0,4,6.31a1,1,0,0,0-.32-.22A1.06,1.06,0,0,0,3.25,6a1.1,1.1,0,0,0-.4.08,1.07,1.07,0,0,0-.54.54,1.1,1.1,0,0,0-.08.4,1.06,1.06,0,0,0,.08.4,1,1,0,0,0,.22.32A.87.87,0,0,0,2.85,8a.92.92,0,0,0,.4.08A.9.9,0,0,0,3.65,8Zm-.81-.53a.61.61,0,1,1,.41.16A.56.56,0,0,1,2.84,7.44Z"/><path d="M9,.7a.7.7,0,0,0-.7-.7H5.84L5.56.28h0a1.07,1.07,0,0,1-2.13,0h0L3.15,0H.7A.7.7,0,0,0,0,.7V6.23H0V13.3a.7.7,0,0,0,.7.7H3.15l.28-.28h0a1.06,1.06,0,1,1,2.12,0h0l.29.28H8.28A.7.7,0,0,0,9,13.3V7.77H9ZM8.43,13.3a.15.15,0,0,1-.15.14H6.09a1.62,1.62,0,0,0-3.2,0H.7a.15.15,0,0,1-.14-.14V7.77h0V4.05H1V3.49H.56V.7A.15.15,0,0,1,.7.56H2.9A1.61,1.61,0,0,0,4.5,1.91,1.63,1.63,0,0,0,6.1.56H8.29A.15.15,0,0,1,8.43.7V3.49H8v.56h.47V6.23h0Z"/><rect x="1.63" y="3.49" width="0.98" height="0.56"/><rect x="3.21" y="3.49" width="0.98" height="0.56"/><rect x="4.8" y="3.49" width="0.98" height="0.56"/><rect x="6.38" y="3.49" width="0.98" height="0.56"/></g></g></g></svg>'});