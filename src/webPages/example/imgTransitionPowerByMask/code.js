const html = `
<div style="width:300px;height:300px;position:relative">
    <div style="position: absolute;inset:0;">
    <img src="https://images.pexels.com/photos/35184929/pexels-photo-35184929.jpeg" style="width: 100%;height: 100%;object-fit: cover;" alt="1">
    </div>
    <div style="position: absolute;inset:0;" class="x">
    <img src="https://images.pexels.com/photos/35293768/pexels-photo-35293768.jpeg" style="width: 100%;height: 100%;object-fit: cover;" alt="1">
    </div>
</div>
`;
const css = `
.x{
    mask-image: url("/assets/mask-grad-vt.png");
    mask-size: 100% 330%;
    animation: abc 5s infinite both alternate;
    mask-repeat: no-repeat;
}
@keyframes abc {
    0%{
        mask-position: 0 100%;
    }
    100%{
        mask-position: 0 0;
    }
}
`;
const js = `
`;

export default {
    '':{js,css,html}
};
