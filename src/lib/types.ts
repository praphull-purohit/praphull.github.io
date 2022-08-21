
export type Tag = {
    name: string,
    title: string,
    hash?: string,
    url?: string
};
export type ContactDetails = {
    name: string,
    icon: string,
    id: string,
    url?: string
};
export type Experience = {
    item: string,
    duration: string
};

export type LightbendCertification = {
    certificateId: string,
    name: string,
    icon: string,
    iconWidth?: number,
    iconHeight?: number
};

export type Certifications = {
    lightbend: LightbendCertification[]
};

export type CourseraCourse = {
    certificateId: string,
    name: string,
    university: string
};

export type Courses = {
    coursera: CourseraCourse[]
}

export type Info = {
    tags: Tag[],
    contactDetails: ContactDetails[],
    experience: Experience[],
    preferred: string[],
    certifications: Certifications,
    courses: Courses
};