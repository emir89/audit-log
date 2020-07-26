<template>
    <div class="user-menu-container">
        <p class="role">ADMINISTRATOR</p>
        <p><strong>john.doe@jatheon.com</strong></p>
        <p>Jatheon Technologies</p>
        <hr class="divider" />
        <div class="user-menu-links">
            <p>Account Settings</p>
            <p>Company Settings</p>
            <p>Help Center</p>
            <p>Log Out</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserMenu"
    }
</script>

<style>
    .user-menu-container {
        width: 230px;
        height: 210px;
        position: absolute;
        margin: 263px 0 0 935px;
        background-color: #FFFFFF;
        border: 1px solid #CFCFCF;
        border-radius: 4px;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
        font-size: 14px;
        line-height: 12px;
    }

    .user-menu-container, .user-menu-links {
        text-align: start;
    }

    .user-menu-links {
        line-height: 14px;
    }

    .user-menu-container p, .user-menu-links p {
        margin-left: 12px;
    }

    .user-menu-links p:hover {
        color: #00A88D;
        cursor: pointer;
    }

    .role {
        font-weight: 700;
        font-size: 11px;
        color: #9B9B9B;
    }

    .divider {
        width: 206px;
        border: none;
        border-top: 1px solid #CFCFCF;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .user-menu-container {
            margin: 263px 0 0 195px;
        }
    }

    @media (min-width: 975px) and (max-width: 1025px),
    (min-width: 1025px) and (max-width: 1510px) {
        .user-menu-container {
            margin: 263px 0 0 445px;
        }
    }

    @media only screen
    and (min-device-width : 768px)
    and (max-device-width : 1024px)
    and (orientation : portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .user-menu-container {
            margin: 123px 0 0 195px;
        }
    }

    @media only screen
    and (min-device-width : 768px)
    and (max-device-width : 1024px)
    and (orientation : landscape)
    and (-webkit-min-device-pixel-ratio: 1) {
        .user-menu-container {
            margin: 123px 0 0 445px;
        }
    }
</style>