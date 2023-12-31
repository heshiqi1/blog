<style>
  .custom-line-height {
    line-height: 2; /* 设置行高为2倍 */
  }
</style>

# <center>需求分析和思考</center><br class="custom-line-height">   

# **当前测试的需求分析场景：**   
做过测试的同学都知道，每次新的项目开始，上司给你安排测试任务，不是直接就让你直接去写测试用例，执行测试用例。而是丢给你一份当前项目的用户需求，然后和你说，“小明，这是当前项目的测试需求，你看完后就开始做测试设计吧。”
然后大家就拿着需求文档，或者是一些产品经理整理的需求功能，就开始看呀看，不到半个小时就以为自己了解来需求，开始做测试用例编写。
结果到了执行用例的时候就是各种bug漏测，当测试经理找为什么会出现这种低级漏测啊？！页面UI约束超出边界值低级问题为什么没有在用例里面覆盖啊？稍微勇敢的你可能会说：“老大，这是PO的锅，是他们在需求矩阵里面提到！！！”然后。。。。结果你知道的
# 需求分析到底分析什么？
有的人可能会说，这是测试的必要流程，这是让我们了解测试的对象和实现的功能。但是，你只是熟悉了功能是什么，你就能测试出和客户不一样的角度？而不是用户体验？
# 需求到底分析什么：
1、分析产品给客户带来的价值，例如解决了客户的什么需要？

2、分析产品给用户的体验，这方面主要和UI相关，了解用户使用操作界面是否可以优化？

3、分析这个功能是新增功能？历史功能合入？还是已有功能优化？

4、分析要做的功能和现有功能之间的关联、冲突。

5、分析客户的部署场景，客户使用该功能的场景。

6、分析需求实现的性能相关参数，例如允许客户在低配的情况下最多创建多少台虚拟机？

7、分析功能实现对外部条件是否有依赖，例如实现高可靠性的功能是否需要硬件存储的性能对应很高？
# 从产品思维的角度去分析需求分析：
1、我的产品解决了什么问题？是痛点、痒点还是爽点？

2、我在为谁解决这个问题？这个是用户画像问题。

3、有多少人需要解决这个问题？这个是市场规模的问题。

4、目前人们是怎么解决这个问题的？这是竞争分析问题。

5、我的竞争方案为什么能够在市场竞争中胜出？不要简单的看单点的竞争力，而是看到点线面体，看到谁给的赋能。

6、用户会在什么场景触发情绪？需要马上去解决问题，这是场景问题。

7、当用户遇到问题的时候，他会想到哪个名字呢？

流程的优化：
问题（背后的情绪）-----》场景-----》对象（类型和规模）【用户画像】------》现有方案（我的方案和其他对手方案）【竟品分析】
# 测试要求的感受：
测试其实是个要求很高的行业，在需求理解的程度上要和产品经理接近，在产品实现上要达到一般开发的理解水平，在质量的风险把控意识上要比QA还要高（毕竟是你全程跟进了产品，很多QA都是后期的时候按常规流程检查产品，发现的问题很少）。总上述看来，一个优秀的测试人员，并非是想象中那样的点点点，而是一个兼顾整个产品所有流程的复合型人才。
# 但是我们去哪收集资料呢？
获得了上述的方法，大家可能迫不及待的回过头对自己分析过的需求再次进行分析。有的同学分析分析着又迷茫了，我看需求文档里并没有上述你说的分析内容啊？！怎么操作啊？
以下我给你提供几个方向去获得上述资料：

1、需求文档，这点至少可以解决用户的需求文档

2、咨询活生生的产品经理，产品经理就是最好的资源，他们接触了客户的需求和使用场景，对行业也有自己的了解，好好利用这个资源，事半功倍。

3、寻找同行的资料，或者是体验同行的产品，同行那些做的好的产品，有什么特点，我们有什么可以借鉴的？

4、参考历史其他人对这个模块的需求分析维度，如果这个模块只是做了迭代，你可以参考之前测试做的分析，看看有木有可以借鉴的资料

5、市场相关产品的调研体验报告	
