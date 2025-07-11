import { PageProps } from "$fresh/server.ts";

export default ({Component}: PageProps) => {
    return (
        <div>
            <Component/>
        </div>
    )
}