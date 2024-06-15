# attention is all you need ☺️

50+ mini web projects using Vue 3 + TypeScript + Vite + Tailwindcss

## tailwindcss 使用体验
1. 审查元素时,常常不知道该元素的功能, 需要注释作为指示
2. 如果有伪类伪元素, 那么该容器的类会特别长
3. box-shadow 不灵活, 只能修改配置文件
4. 对rgb以及rgba语法比较严格, 不能有空格
5. flex-grow 不灵活, 以及 grid-template 不灵活
6. background-image 不支持url
7. 支持渐变色, 但复杂渐变色无法实现
8. 简单的过渡很舒服, 复杂的过渡没法做, 并且对动画的支持较差
9. container 不知道是怎样的恶趣味, 让作者使用一个如此常见的类名作为预定义类; 
10. 适合在项目开始引入, 不适合中途引入, 无法清楚的知道之前写的类中是否包含预定义类
11. 当和 Antdesign 等组件库连用时, tailwindcss 的一些样式重置会覆盖掉 ant 的类, 不过这是可配置的
12. 长时间使用确实存在忘记原生 css 类属性的问题