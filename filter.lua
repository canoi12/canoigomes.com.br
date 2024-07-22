return {
    {
        Header = function(el)
            -- print(el, el.level)
            table.insert(el.attr.classes, 'title')
            local size = 2 + el.level
            table.insert(el.attr.classes, 'is-' .. size)
            table.insert(el.attr.classes, 'post-header')
            return el
        end
    },
}