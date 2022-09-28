import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import InfoMatakuliah from '../../component/silabus/InfoMatakuliah'

const KontrakKrs = () => {
    return (
        <>
            <Header4 />
            <main>
                <section className="p-0 m-0">
                    <BannerSilabus />
                </section>

                <section>
                    <div className="container text-dark">
                        <InfoMatakuliah />
                        <p>Maksimal SKS : 24</p>
                        <p>SKS Diambil : 24</p>
                        <btn className="btn badge btn-success">Lihat Draft</btn>
                    </div>
                </section>
            </main>
            <Footer3 />
        </>
    )
}

export default KontrakKrs