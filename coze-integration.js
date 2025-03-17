<script src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.5/libs/cn/index.js"></script>
<script>
    new CozeWebSDK.WebChatClient({
    config: {
    bot_id: '7482764763568242725',
},
    componentProps: {
    title: 'Coze',
},
    auth: {
    type: 'token',
    token: 'pat_pQ07uBBvsx5lSplDxyY5U33OYUtzrODAVAwzS0zbDB5WpoZ6lPJVvBddOMUcwvtn',
    onRefreshToken: function () {
    return 'pat_pQ07uBBvsx5lSplDxyY5U33OYUtzrODAVAwzS0zbDB5WpoZ6lPJVvBddOMUcwvtn'
}
}
});
</script>