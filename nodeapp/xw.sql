-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-14 15:28:59
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xw`
--
CREATE DATABASE IF NOT EXISTS `xw` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `xw`;

-- --------------------------------------------------------

--
-- 表的结构 `xw_delcomment`
--

DROP TABLE IF EXISTS `xw_delcomment`;
CREATE TABLE `xw_delcomment` (
  `xw_did` int(11) NOT NULL,
  `xw_userid` varchar(1000) DEFAULT NULL,
  `xw_details` varchar(1000) DEFAULT NULL,
  `xw_uname` varchar(32) DEFAULT NULL,
  `xw_img` varchar(128) DEFAULT NULL,
  `xw_datetime` int(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xw_delcomment`
--

INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(1, '1', '真的假的他怎么能这么秀。--|--肯定是真的了。', 'zhangli', 'user/mm.png', 0);
INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(2, '1', '1', 'zhangli', 'user/mm.png', 0);
INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(3, '1', '怎么整个楼都是我的号emm', 'zhangli', 'user/mm.png', 0);
INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(4, '1', '原来是真的', 'zhangli', 'user/mm.png', 0);
INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(5, '1', '怎么感觉没人', 'zhangli', 'user/mm.png', 0);
INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(6, '1', '整个平台就我一个人吗', 'zhangli', 'user/mm.png', 0);
INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(7, '1', '原来这是真的', 'zhangli', 'user/mm.png', 0);
INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(8, '1', '真的就我一个人', 'zhangli', 'user/mm.png', 0);
INSERT INTO `xw_delcomment` (`xw_did`, `xw_userid`, `xw_details`, `xw_uname`, `xw_img`, `xw_datetime`) VALUES(9, '1', '真快乐', 'zhangli', 'user/mm.png', 0);

-- --------------------------------------------------------

--
-- 表的结构 `xw_index`
--

DROP TABLE IF EXISTS `xw_index`;
CREATE TABLE `xw_index` (
  `pid` int(11) NOT NULL,
  `translate` varchar(64) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `source` varchar(128) DEFAULT NULL,
  `comment` int(11) DEFAULT NULL,
  `Source_picture` varchar(128) DEFAULT NULL,
  `Release_time` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xw_index`
--

INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(1, 'tj', '人民海军70年', 'index/indexinwenceshi1.jpeg', '百度新闻', 0, 'tubiao/tubiao1.png', '1');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(2, 'tj', '唱响奋斗的青春之歌', 'index/indexinwenceshi2.jpeg', '百度新闻', 0, 'tubiao/tubiao1.png', '1');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(3, 'tj', '习近平检阅参加海上阅兵活动的13国海军舰艇', 'index/indexinwenceshi3.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '1');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(4, 'tj', '听！不同的语言文字，说着同一个梦想', 'index/indexinwenceshi4.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '1');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(5, 'tj', '“一带一路”国际合作高峰论坛亮点抢先看  专题', 'index/indexinwenceshi5.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(6, 'tj', '伴随90后成长的第四套人民币告别市场，这几种不能拒收', 'index/indexinwenceshi6.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(7, 'tj', '“占中”案判决美官员置喙 外交部：香港事务纯属中国内政', 'index/indexinwenceshi7.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(8, 'tj', '某某小道消息，听说这是一个测试网页', 'index/indexinwenceshi8.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(9, 'tj', '中国空间站来了！2022年前后“天宫”将建成！', 'index/indexinwenceshi9.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(10, 'tj', '最高人民检察院依法对孟宏伟决定逮捕', 'index/indexinwenceshi10.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(11, 'tj', '晚节不保！三届全国劳模退休前受贿6000多万栽了', 'index/indexinwenceshi11.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(12, 'tj', '认房认贷、叫停优惠……这些城市楼市收紧 还有哪些会跟进', 'index/indexinwenceshi12.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(13, 'tj', '首次！云南省委省政府聘任中科院院士为高校校长', 'index/indexinwenceshi13.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(14, 'js', '歼灭空中“目标”、救援“事故”潜艇！中俄海军联演课目多', 'index/indexinwenceshi14.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '中青在线');
INSERT INTO `xw_index` (`pid`, `translate`, `title`, `pic`, `source`, `comment`, `Source_picture`, `Release_time`) VALUES(15, 'tj', '人民日报评论员：履行好党和人民赋予的新时代职责使命', 'index/indexinwenceshi15.jpeg', '轩方', 0, 'tubiao/tubiao2.png', '05-09 21:02');

-- --------------------------------------------------------

--
-- 表的结构 `xw_index_details`
--

DROP TABLE IF EXISTS `xw_index_details`;
CREATE TABLE `xw_index_details` (
  `pid` int(11) NOT NULL,
  `details` varchar(1000) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `pici` varchar(128) DEFAULT NULL,
  `picii` varchar(128) DEFAULT NULL,
  `video` varchar(128) DEFAULT NULL,
  `xw_delcomment` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xw_index_details`
--

INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(1, '人民海军从一穷二白起步，经过70年发展，如今已经发展成为五大兵种齐全、核常兼备的战略性军种。\r\n\r\n　　向海图强，逐梦深蓝。中央广播电视总台央视网推出微视频《人民海军70年》，追忆峥嵘岁月，致敬光辉历史。', 'http://img3.imgtn.bdimg.com/it/u=1871574582,3158991769&fm=200&gp=0.jpg', '', '', '', '1,2,3,7');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(2, '向着梦想的方向，青春绽放更精彩。新时代青年建功立业的舞台空前广阔，当代青年要把个人的理想追求融入国家和民族的事业中，立足本职岗位，做好本职工作，脚踏实地，甘于奉献，唱响奋斗的青春之歌。”', 'img/recommend/recommend_img3.png', '', '', '', '1,3,6,8');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(3, '央视网消息：23日15时许，国家主席、中央军委主席习近平登上检阅台，检阅受邀参加海上阅兵活动的13国海军18艘舰艇。通过检阅舰时，各国舰艇执行各自传统礼仪表达敬意。检阅舰鸣笛还礼，习近平向受阅各国舰艇官兵挥手致意。', 'img/product_detail/product_detail_img1.jpg', '', '', '', '2,4,5');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(4, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao1.png', '', '', '', '3,6');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(5, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao2.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(6, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao3.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(7, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao4.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(8, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao5.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(9, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao6.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(10, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao7.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(11, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao8.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(12, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao9.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(13, '该新闻因为不可抵历因素已损坏', 'tubiao/tubiao10.png', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(14, '俄媒称，俄罗斯东部军区太平洋舰队新闻处5月3日发布消息称，中俄海军在黄海海域进行了“海上联合-2019”年度军演的防空演练。\r\n\r\n塔斯社5月3日报道称，公告指出：“据中俄‘海上联合-2019’军事演习方案，俄太平洋舰队和中国海军今日（5月3日）在黄海海域进行了锚地联合防空演练。‘瓦良格’号导弹巡洋舰、‘维诺格拉多夫海军上将’号和‘特里布茨海军上将’号大型反潜舰、‘完美’号轻型护卫舰与中国的导弹驱逐舰即哈尔滨舰和长春舰，导弹护卫舰即芜湖舰、邯郸舰共同参加了演习。舰艇编队在防空课目中演练了联合反击来自假想敌空中进攻武器袭击的方案，没有实弹射击。”\r\n\r\n报道称，在演习过程中，两国军舰及时发现并开始跟踪假想的破坏者，当后者进入舰载防空系统的射程之内时，“假定”歼灭了空中目标。充当假想敌的是中国海军的两架轰-6L轰炸机。\r\n\r\n另据塔斯社5月2日报道，俄罗斯东部军区太平洋舰队新闻处5月2日发布通报称，中俄两国海军救生船船员演练了联合援潜救生的技能。\r\n\r\n通报指出：“根据中俄‘海上联合-2019’军事演习方案，俄太平洋舰队和中国海军的救生船船员5月2日在黄海海域演练了向位于海底的事故潜艇提供救助的技能。”\r\n\r\n太平洋舰队新闻处介绍说，俄方“伊戈尔·别洛乌索夫”号救生船与中国人民解放军海军“海洋岛”号综合援潜救生船与海上航空兵一道，完成了对70米深处“事故”潜艇的搜索，“借助无人潜水装置考察‘远征’号潜艇的情况后，太平洋舰队的搜救保障部队利用AS-40深海潜水器，转移了‘事故’潜艇上的人员。中方同行也完成了对‘阿穆尔河畔共青城’号俄方船员的救援行动。潜艇上的‘伤者’接受了医疗急救，而后还完成了艇员的医疗加减压程序”。\r\n\r\n报道称，中俄“海上联合-2019”演习于5月1日在中国港口城市青岛拉开帷幕。它旨在巩固发展中俄全面战略协作伙伴关系，深化两军友好务实合作，增强两国海军共同应对海上安全威胁的能力。双方一共出动了2艘潜艇、13艘水面舰艇，以及固定翼飞机、直升机和若干陆战队员。', 'http://p1.pstatp.com/large/pgc-image/RPPlxaigzprzt', '', '', '', '');
INSERT INTO `xw_index_details` (`pid`, `details`, `pic`, `pici`, `picii`, `video`, `xw_delcomment`) VALUES(15, '新华社北京5月9日电 人民日报5月10日评论员文章：履行好党和人民赋予的新时代职责使命——论学习贯彻习近平总书记全国公安工作会议重要讲话精神使命呼唤担当，使命引领未来。在全国公安工作会议上，习近平总书记着眼民族复兴伟业，深刻分析国内外大势，对公安机关履行好党和人民赋予的新时代职责使命提出了明确要求，对于我们做好公安工作，更好保障人民安居乐业、社会安定有序、国家长治久安，具有十分重大的意义。履行好党和人民赋予的新时代职责使命，就要深刻理解党中央对新时代公安工作的职责定位。当前，我们面临的外部环境和内部条件发生了深刻变化，前进道路上面临不少新的风险挑战，公安机关的任务更加艰巨繁重。在今年1月召开的中央政法工作会议上，习近平总书记明确提出，政法战线肩负着维护国家政治安全、确保社会大局稳定、促进社会公平正义、保障人民安居乐业的重大使命任务。这也是党中央对新时代公安工作的职责定位，是做好新时代公安工作的基本遵循。必须深刻认识到，维护国家政治安全是重大政治责任，确保社会大局稳定是基本任务，促进社会公平正义是核心价值追求，保障人民安居乐业是根本目标。只有深刻把握职责定位，不断强化责任感和使命感，才能增强履职尽责的自觉性与坚定性。履行好党和人民赋予的新时代职责使命，就要坚决捍卫政治安全、维护社会安定、保障人民安宁。推进改革发展，实现宏伟目标，必须创造一个安全稳定的政治社会环境，公安机关责无旁贷。要积极预防、妥善化解各类社会矛盾，确保社会既充满生机活力又保持安定有序。要处理好维稳和维权的关系，既要解决合理合法诉求、维护群众利益，也要引导群众依法表达诉求、维护社会秩序。要围绕影响群众安全感的突出问题，履行好打击犯罪、保护人民的职责，努力使人民群众安全感更加充实、更有保障、更可持续，努力建设更高水平的平安中国。履行好党和人民赋予的新时代职责使命，就要坚持“稳”字当头，把保安全、护稳定的各项措施抓紧抓实。今年是新中国成立70周年，2020年是全面建成小康社会收官之年，2021年是我们党成立100周年，每个年份都是重要时间节点，是做好各项工作的重要坐标。今年防风险、保安全、护稳定的任务尤为艰巨繁重。坚持以人民为中心的发展思想，坚持稳中求进工作总基调，立足“稳”这个大局，强化保安全、护稳定各项措施，有铁一般的理想信念、铁一般的责任担当、铁一般的过硬本领、铁一般的纪律作风，就能把公安工作做得更好', 'null', '', '', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `xw_journalism_pic`
--

DROP TABLE IF EXISTS `xw_journalism_pic`;
CREATE TABLE `xw_journalism_pic` (
  `pid` int(11) NOT NULL,
  `Journalism_id` int(11) DEFAULT NULL,
  `sm` varchar(128) DEFAULT NULL,
  `md` varchar(128) DEFAULT NULL,
  `lg` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `xw_user`
--

DROP TABLE IF EXISTS `xw_user`;
CREATE TABLE `xw_user` (
  `xw_uid` int(11) NOT NULL,
  `xw_email` varchar(25) DEFAULT NULL,
  `xw_upass` varchar(32) DEFAULT NULL,
  `xw_uname` varchar(32) DEFAULT NULL,
  `xw_phone` varchar(64) DEFAULT NULL,
  `xw_img` varchar(32) DEFAULT NULL,
  `xw_age` tinyint(1) DEFAULT NULL,
  `xw_datetime` varchar(64) DEFAULT NULL,
  `xw_wd` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xw_user`
--

INSERT INTO `xw_user` (`xw_uid`, `xw_email`, `xw_upass`, `xw_uname`, `xw_phone`, `xw_img`, `xw_age`, `xw_datetime`, `xw_wd`) VALUES(1, '194@qq.com', '202cb962ac59075b964b07152d234b70', 'caocao', '18937432643', 'img/touxiang1.png', 1, '说的都是什么啊', 1);
INSERT INTO `xw_user` (`xw_uid`, `xw_email`, `xw_upass`, `xw_uname`, `xw_phone`, `xw_img`, `xw_age`, `xw_datetime`, `xw_wd`) VALUES(2, '110@qq.com', '123456', 'zhaosi', '1545785465', 'img/touxiang2.png', 0, '我什么都没看懂', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `xw_delcomment`
--
ALTER TABLE `xw_delcomment`
  ADD PRIMARY KEY (`xw_did`);

--
-- Indexes for table `xw_index`
--
ALTER TABLE `xw_index`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `xw_index_details`
--
ALTER TABLE `xw_index_details`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `xw_journalism_pic`
--
ALTER TABLE `xw_journalism_pic`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `xw_user`
--
ALTER TABLE `xw_user`
  ADD PRIMARY KEY (`xw_uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `xw_delcomment`
--
ALTER TABLE `xw_delcomment`
  MODIFY `xw_did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `xw_index`
--
ALTER TABLE `xw_index`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用表AUTO_INCREMENT `xw_index_details`
--
ALTER TABLE `xw_index_details`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用表AUTO_INCREMENT `xw_journalism_pic`
--
ALTER TABLE `xw_journalism_pic`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `xw_user`
--
ALTER TABLE `xw_user`
  MODIFY `xw_uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
