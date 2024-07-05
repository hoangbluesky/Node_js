
class NewController {

    index(req,res){
        res.render('news')
    }

    // news/:slug
    show(req,res){
        res.send("NEWS DETAILS")
    }
}


export default new NewController();
