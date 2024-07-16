metaballs = {}
function createMetaball(x, y)
  local metaball = {
    x = x or 0,
    y = y or 0,
    vx = 0,
    vy = 0,
    size = 1,
    update = function(self, dt)
      self.x = self.x + (self.vx * dt) 
      self.y = self.y + (self.vy * dt) 
      if self.x >= 800 or self.x <= 0 then 
        self.vx = self.vx * -1 
      end 
      if self.y >= 600 or self.y <=0 then
        self.vy = self.vy * -1
      end
    end
  }
  return metaball
end

function love.load()
  metaball_image = love.graphics.newImage("metaball.png")
  canvas = love.graphics.newCanvas(800, 600)
  shadersrc = [[ 
    vec4 effect(vec4 color, Image texture, vec2 tex_coord, vec2 screen_coord) { 
      vec4 pixel = Texel(texture, tex_coord); 
      if (pixel.a <= 0.6)
        pixel.a = 0.0;
      return pixel * color;
    } ]]
  shader = love.graphics.newShader(shadersrc)
end

local time = 0
function love.update(dt)
  mx, my = love.mouse.getPosition()
    time = time + dt
    if love.mouse.isDown(1) and time >= 0.4 then
        time = 0
        local meta = createMetaball(mx, my)
        meta.vx = love.math.random(-200, 200)
        meta.vy = love.math.random(-200, 200)
        meta.size = love.math.random() + 0.1
        table.insert(metaballs, meta)
    end
    for i,v in ipairs(metaballs) do
      v:update(dt)
    end
end

function love.draw()
  love.graphics.setCanvas(canvas)
  love.graphics.clear(0,0,0,0)
  love.graphics.draw(metaball_image, mx, my, 0, 1, 1, 100, 100)
  for i,v in ipairs(metaballs) do
    love.graphics.draw(metaball_image, v.x, v.y, 0, v.size, v.size)
  end
  love.graphics.setCanvas()
  love.graphics.setShader(shader)
  love.graphics.draw(canvas)
  love.graphics.setShader()
end