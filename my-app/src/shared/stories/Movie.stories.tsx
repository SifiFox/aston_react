import {Movie} from "@/widgets/movie/ui/movie";
import {movie} from "@/shared/stories/mocdata";
import '@/app/styles/index.scss'
import '@/app/styles/reset.scss'
import '@/app/styles/variables/global.scss'
import cls from '@/widgets/movie/ui/movie.module.scss'

const meta = {
    title: "Components/Movie",
    component: Movie,
    tags: ["autodocs"],
}

export default meta


const Template = (args) => <Movie {...args}/>
export const Default = () => (
    <Template
        movie={movie}
        className={cls.movie}
    />
);
