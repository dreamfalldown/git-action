import { Controller } from 'egg';
import { Post, Prefix } from 'egg-shell-decorators';

@Prefix('/home')
class HomeController extends Controller {

  @Post('/')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi(`12312412312 ${ctx.helper.util.hello()}`);
  }
}

export default HomeController;
