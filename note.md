# To comprehend the mechanism of React-Redux

- advisese from some experienced progammers

------
2020-1-10
  >`reducer`处理的是全局的`state`，他保存在`store`里，然后`connect`时是传值给`connect`包的组件，那对于这个组件来说，当然就是props可，传进来的属性都是`props`//
  >`redux`的顶层的`provide`是一个`react`组件，里面有个`state`，存的就是你`reducer`里操作的东西，当你操作`reducer`时，这个`state`变化就`setState`，而整个app都是它的子组件。//
  >`connect`是个高阶组件，里面用`context`接受顶层`state`，你写的`mapStateToProps`就是把你的`state`里对应的数据传入`connect`所包的你的react组件。


  >今天話題技術性很強//
  >我說下redux//
  >redux的`store`//
  >相當於是唯一的,置於最頂端的,整個app的一個`provider`的裡面//
  >給內部所有`component`提供數據的//
  >>提问： 多个独立功能和数据的`components`，它们也共享同一个`redux store`？//
  >>答：對
  >>`store`是唯一的
  >>只是大部分時候`container`是吧`store`裡面的數據取出來然後map到組件裡面的 //
  >>> 那是通过`connect` 去给相应的`component `分配`statetoprops`?
  >>> yes!
  
  >而`state`只能表示傳入數據的狀態,如果你有`reducer`
  >你的`rootReducer`應該是有多個`reducer`組成的
  >那麼每個`reducer`裡面的實際上就是`state`


after the understanding of the working mechanism, I made Redux acclimated to the existing React project.