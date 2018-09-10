﻿/*
风象WebApp中间件
Author:cunjing
Date:20180719
*/

(function () {
    function FxUrl() {
        //域名
        //this.domain = "http://fengxiang.net/";
	  this.domain = "http://192.168.0.110:8001/";
        //Api地址
        this.apiUrl = this.domain + "app.php/";
        return {
        	Domain:this.domain,
            //登录地址
            LoginUrl: this.domain + 'App/login.html',
            //个人中心地址
            MemberHtmlUrl: this.domain + 'App/my.html',

            //小组话题列表    API
            CommunityArticleUrl: this.apiUrl + 'CommunityArticle/index',

            //搜索/小组成员列表API
            CommunitySearchteamURL: this.apiUrl +'community/searchteam',


            //首页Api
            IndexUrl: this.apiUrl + 'index/index',

            //获取是否登陆        API
            IsMemberLoginUrl: this.apiUrl + 'index/is_member_login',

		//登录提交API
            LoginSubUrl: this.apiUrl + 'Login/index',

            //手机登录提交API
            MobileLoginSubUrl: this.apiUrl + 'Login/mobileLogin',

		//注册提交API
            RegisterSubUrl: this.apiUrl + 'Login/register',

            //文章详情API
            ArticleURL: this.apiUrl + 'article/article_details',

            //专题文章详情API
            SpecialDetailsURL: this.apiUrl + 'special/details',

		//获取个人中心数据API
            MemberUrl: this.apiUrl + 'user/index',

            //文章列表API
            ArticleListURL: this.apiUrl + 'article/article_list',

            //获取当前用户已选择的频道与未选择的频道API
            OptionaSectionURL: this.apiUrl + 'section/optiona_sectionl',

            //添加当前用户的自选频道API
            OptionaSectionAddURL: this.apiUrl + 'section/optiona_sectionl_add',

            //添加当前用户的自选频道API
            OptionaSectionDelURL: this.apiUrl + 'section/optiona_sectionl_del',

            //意见反馈API
            FeedbacklURL: this.apiUrl + 'set/feedback',

            //历史反馈列表API
            FeedbackListlURL: this.apiUrl + 'set/feedbackList',

            //会员认证状态API
            MemberauthStatusURL: this.apiUrl +'memberauth/getauthstatus',

            //会员认证证件API
            MemberauthIndexURL: this.apiUrl +'memberauth/index',

            //会员认证证件上传API
            UploadfilesURL: this.apiUrl +'memberauth/uploadfiles',

            //个人主页
            homepageURL: this.apiUrl + 'user/index',

            //我发表的文章接口
            publishURL: this.apiUrl + 'user/published',

            //其它会员个人主页API
            OtherHomepageURL: this.apiUrl + 'otherUser/index',

            //其它会员发表的文章API
            OtherPublishURL: this.apiUrl + 'otherUser/published',

            //风象助手API
            AssistantURL: this.apiUrl + 'msg/assistant',

            //信息动态API
            InformationURL: this.apiUrl + 'msg/information',

            //帐户与安全API
            AccountsecurityURL: this.apiUrl + 'user/accountsecurity',

            //发送短信验证码API
            SendSmsCodeURL: this.apiUrl + 'user/getusersmscode',

            //注册发送短信验证码API
            RegSendSmsCodeURL: this.apiUrl + 'login/getusersmscode',

            //验证短信验证码API
            CheckSmsCodeURL: this.apiUrl + 'user/checksmscode',

            //注册验证短信验证码API
            RegCheckSmsCodeURL: this.apiUrl + 'login/regchecksmscode',

            //忘记密码  手机找加密码API
            ForgetUserPasswordURL: this.apiUrl + 'login/forgetUserPassword',

            //修改/重置用户密码API
            ModifyuserpasswordURL: this.apiUrl + 'user/modifyuserpassword',

            //修改手机号码API
            ModifyusermobileURL: this.apiUrl + 'user/modifyusermobile',

            //我的收藏
            topicURL: this.apiUrl + 'user/collectionlist',

            //我的收藏删除接口
            collectionURL: this.apiUrl + 'user/collection',

            //退出登录
            quitURL: this.apiUrl + 'user/logout',

            //关注我的
            attentionURL: this.apiUrl + 'user/followlist',

            //取消关注和关注
            followURL: this.apiUrl + 'user/follow',

            //修改性别接口
            modifyURL: this.apiUrl + 'user/modifyUserSex',

            //修改昵称接口
            nicknameURL: this.apiUrl + 'user/modifyUserNickname',

            //修改用户头像API
            ModifyuseravatarURL: this.apiUrl + 'user/modifyuseravatar',

            //我的评论的文章
           // reviewarticleURL: this.apiUrl + 'comment/replyMeList',

            //回复我的评论
            replyMeListUrl : this.apiUrl + 'Comment/replyMeList',
            //我回复的评论
            myCommentList : this.apiUrl +'Comment/myCommentList',


            //举报评论
            commentURL: this.apiUrl + 'comment/report',

            //添加评论
            //addURL : this.apiUrl + 'comment/add',

            //点赞
            commentLoveURL: this.apiUrl +'comment/commentLove',

            //添加评论
            commentdexURL: this.apiUrl +'Comment/addComments',

            //获取文章评论信息
            getCommentURL: this.apiUrl + 'Comment/index',


            //专题
            SpecialURL: this.apiUrl +'Special/getSpecialHomeInfo',

            //专题文章接口
            SpecialArticleURL: this.apiUrl +'Special/getSpecialArticle',

            //关于风象
            aboutURL: this.apiUrl +'set/about',

            //社区小组主页
            communityHome : this.apiUrl + 'usercommunity/team',
            //获取社区小组成员足迹
            getfootmarklist : this.apiUrl + 'usercommunity/getfootmarklist',

            //增加社区小组成员足迹
            addfootmark : this.apiUrl + 'usercommunity/addfootmark',

            //社区小组设置接口
            SetteamURL: this.apiUrl + 'usercommunity/setteam',

            //社区小组话题
            communityArticle: this.apiUrl + 'CommunityArticle/index',


            //(搜索/小组成员列表接口)
            teammemberlist: this.apiUrl + 'usercommunity/teammemberlist',

            //添加/移除管理员
            setteamadmin: this.apiUrl +'usercommunity/setteamadmin',

            //获取管理员列表接口
            getteamadminlist: this.apiUrl +'usercommunity/getteamadminlist',

            //删除小组成员接口
            delteamuser: this.apiUrl +'usercommunity/delteamuser',




            //评论详情
            detailURL: this.apiUrl +'comment/detail',


            //已登陆社区
            UsercommunityURL: this.apiUrl +'usercommunity/index',

            //未登陆社区
            CommunityURL: this.apiUrl +'community/index',

            //加入小组
            JointeamURL: this.apiUrl +'usercommunity/jointeam',

            //小组上传头像
            UsercommunitysURL: this.apiUrl +'usercommunity/uploadfiles',

            //小组分类接口
            CommunitycategoryURL: this.apiUrl +'communitycategory/index',

            //我创建的小组接口
            MycreateteamURL: this.apiUrl +'usercommunity/mycreateteam',

            //创建小组
            CreateTeamURL:this.apiUrl+'/app.php/usercommunity/createteam',

            //置顶/取消置顶接口
            TopteamURL: this.apiUrl +'usercommunity/topteam',

            //我加入小组接口
            MyjointeamURL: this.apiUrl +'usercommunity/myjointeam',

            //小组分类
            AllteamlistURL: this.apiUrl +'community/allteamlist',

            //个人主页话题
            MypublishedURL: this.apiUrl +'usercommunity/mypublished',

            //我发表的话题      API
            MypublishedURL: this.apiUrl +'usercommunity/mypublished',

            //我回复的话题      API
            ReplymeURL: this.apiUrl +'usercommunity/replyme',

            //我回复的话题      API
            MyFootMarkURL: this.apiUrl +'usercommunity/myFootMark',

            //话题详情      API
            CommunityDetailsURL: this.apiUrl +'CommunityArticle/articleDetails',


            //邀请通知列表      API
            InvitationnoticeURL: this.apiUrl +'usercommunity/invitationnotice',

            //邀请同意或者拒绝邀请      API
            HandleinviteURL: this.apiUrl +'usercommunity/handleinvite',

            //删除通知      API
            DelinviteURL: this.apiUrl +'usercommunity/delinvite',

            //邀请好友加入小组ite
            InviteURL: this.apiUrl +'usercommunity/delinvite',

            //修改个人签名
            ModifyUserSignatureURL: this.apiUrl +'user/modifyUserSignature',

            //好友
            InvitepagesURL: this.apiUrl +'usercommunity/invite',

            //解散小组        API
            DisbandteamURL: this.apiUrl +'usercommunity/disbandteam',

            //转让小组        API
            TransferteamURL: this.apiUrl +'usercommunity/transferteam',





        }
    }
    window.FxUrl = FxUrl;
})();
