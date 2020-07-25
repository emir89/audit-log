<template>
    <div class="user-menu-container">
        <p class="role">ADMINISTRATOR</p>
        <p><strong>mike.andrew@jatheon.com</strong></p>
        <p>Jatheon Technologies</p>
        <hr class="divider" />
        <div class="user-menu-links">
            <p>Account Settings</p>
            <p>Company Settings</p>
            <p>Help Center</p>
            <p>Keyboard Shortcuts</p>
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
        height: 236px;
        position: absolute;
        margin: 285px 0 0 940px;
        background-color: #FFFFFF;
        border: 1px solid #CFCFCF;
        border-radius: 4px;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
        font-size: 14px;
        line-height: 10px;
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
            margin: 145px 0 0 200px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        .user-menu-container {
            margin: 145px 0 0 450px;
        }
    }

    @media (min-width: 1025px) and (max-width: 1410px) {
        .user-menu-container {
            margin: 285px 0 0 450px;
        }
    }

    @media (min-width: 975px) and (max-width: 1025px) {
        .user-menu-container {
            margin: 145px 0 0 450px;
        }
    }
</style>