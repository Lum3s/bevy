initSidebarItems({"enum":[["AddressMode","How edges should be handled in texture addressing."],["AsModuleDescriptorError",""],["BindingResource","Resource that can be bound to a pipeline."],["BindingType","Specific type of a binding."],["BlendFactor","Alpha blend factor."],["BlendOperation","Alpha blend operation."],["BufferBindingType","Specific type of a buffer binding."],["CachedPipelineState",""],["CompareFunction","Comparison function used for depth and stencil operations."],["Face","Face of a vertex."],["FilterMode","Texel mixing mode when sampling between texels."],["FrontFace","Winding order which classifies the “front” face."],["IndexFormat","Format of indices used with pipeline."],["LoadOp","Operation to perform to the output attachment at the start of a renderpass."],["MapMode","Type of buffer mapping."],["PolygonMode","Type of drawing mode for polygons"],["PrimitiveTopology","Primitive type the input mesh is composed of."],["ProcessShaderError",""],["ProcessedShader","A processed [Shader]. This cannot contain preprocessor directions. It must be “ready to compile”"],["RenderPipelineError",""],["SamplerBindingType","Specific type of a sampler binding."],["ShaderImport",""],["ShaderReflectError",""],["ShaderSource","Source of a shader module."],["ShaderStage","Stage of the programmable pipeline."],["Source",""],["SpecializedMeshPipelineError",""],["StencilOperation","Operation to perform on the stencil value."],["StorageTextureAccess","Specific type of a sample in a texture binding."],["TextureAspect","Kind of data the texture holds."],["TextureDimension","Dimensionality of a texture."],["TextureFormat","Underlying texture data format."],["TextureSampleType","Specific type of a sample in a texture binding."],["TextureViewDimension","Dimensions of a particular texture view."],["TextureViewValue","This type combines wgpu’s `TextureView` and `SurfaceTexture` into the same interface."],["VertexFormat","Vertex Format for a Vertex Attribute (input)."],["VertexStepMode","Rate that determines when vertex data is advanced."]],"mod":[["glsl","Defines traits and types for generating GLSL code from Rust definitions."],["std140","Defines traits and types for working with data adhering to GLSL’s `std140` layout specification."],["std430","Defines traits and types for working with data adhering to GLSL’s `std140` layout specification."]],"static":[["SHADER_IMPORT_PROCESSOR",""]],"struct":[["BindGroup","Bind groups are responsible for binding render resources (e.g. buffers, textures, samplers) to a `TrackedRenderPass`. This makes them accessible in the pipeline (shaders) as uniforms."],["BindGroupDescriptor","Describes a group of bindings and the resources to be bound."],["BindGroupEntry","Bindable resource and the slot to bind it to."],["BindGroupId","A [`BindGroup`] identifier."],["BindGroupLayout",""],["BindGroupLayoutDescriptor","Describes a [`BindGroupLayout`]."],["BindGroupLayoutEntry","Describes a single binding inside a bind group."],["BindGroupLayoutId",""],["BlendComponent","Describes the blend component of a pipeline."],["BlendState","Describe the blend state of a render pipeline."],["Buffer",""],["BufferBinding","Describes the segment of a buffer to bind."],["BufferId",""],["BufferInitDescriptor","Describes a Buffer when allocating."],["BufferSlice",""],["BufferUsages","Different ways that you can use a buffer."],["BufferVec",""],["CachedPipelineId",""],["ColorTargetState","Describes the color state of a render pipeline."],["ColorWrites","Color write mask. Disabled color channels will not be written to."],["CommandEncoder","Encodes a series of GPU operations."],["ComputePassDescriptor","Describes the attachments of a compute pass."],["ComputePipeline","A [`ComputePipeline`] represents a compute pipeline and its single shader stage."],["ComputePipelineDescriptor","Describes a compute pipeline."],["ComputePipelineId","A [`ComputePipeline`] identifier."],["DepthBiasState","Describes the biasing setting for the depth target."],["DepthStencilState","Describes the depth/stencil state in a render pipeline."],["DynamicUniformVec",""],["Extent3d","Extent of a texture related operation."],["FragmentState","Describes the fragment process in a render pipeline."],["ImageCopyBufferBase","View of a buffer which can be used to copy to/from a texture."],["ImageCopyTextureBase","View of a texture which can be used to copy to/from a buffer/texture."],["ImageDataLayout","Layout of a texture in a buffer’s memory."],["ImageSubresourceRange","Subresource range within an image"],["MultisampleState","Describes the multi-sampling state of a render pipeline."],["Operations","Pair of load and store operations for an attachment aspect."],["Origin3d","Origin of a copy to/from a texture."],["PipelineLayout","Handle to a pipeline layout."],["PipelineLayoutDescriptor","Describes a pipeline layout."],["PrimitiveState","Describes the state of primitive assembly and rasterization in a render pipeline."],["RawFragmentState","Describes the fragment process in a render pipeline."],["RawRenderPipelineDescriptor","Describes a render (graphics) pipeline."],["RawVertexBufferLayout","Describes how the vertex buffer is interpreted."],["RawVertexState","Describes the vertex process in a render pipeline."],["RenderPassColorAttachment","Describes a color attachment to a [`RenderPass`]."],["RenderPassDepthStencilAttachment","Describes a depth/stencil attachment to a [`RenderPass`]."],["RenderPassDescriptor","Describes the attachments of a render pass."],["RenderPipeline","A [`RenderPipeline`] represents a graphics pipeline and its stages (shaders), bindings and vertex buffers."],["RenderPipelineCache",""],["RenderPipelineDescriptor","Describes a render (graphics) pipeline."],["RenderPipelineId","A [`RenderPipeline`] identifier."],["Sampler","A Sampler defines how a pipeline will sample from a [`TextureView`]. They define image filters (including anisotropy) and address (wrapping) modes, among other things."],["SamplerDescriptor","Describes a [`Sampler`]"],["SamplerId","A [`Sampler`] identifier."],["Shader","A shader, as defined by its [`ShaderSource`] and `ShaderStage` This is an “unprocessed” shader. It can contain preprocessor directives."],["ShaderData",""],["ShaderId",""],["ShaderImportProcessor",""],["ShaderImports",""],["ShaderLoader",""],["ShaderModule","Handle to a compiled shader module."],["ShaderModuleDescriptor","Descriptor for a shader module."],["ShaderProcessor",""],["ShaderReflection",""],["ShaderStages","Describes the shader stages that a binding will be visible from."],["SpecializedMeshPipelines",""],["SpecializedPipelines",""],["StencilFaceState","Describes stencil state in a render pipeline."],["StencilState","State of the stencil operation (fixed-pipeline stage)."],["StorageBuffer","A helper for a storage buffer binding with a body, or a variable-sized array, or both."],["Texture","A GPU-accessible texture."],["TextureId","A [`Texture`] identifier."],["TextureUsages","Different ways that you can use a texture."],["TextureView","Describes a [`Texture`] with its associated metadata required by a pipeline or `BindGroup`."],["TextureViewDescriptor","Describes a [`TextureView`]."],["TextureViewId","A [`TextureView`] identifier."],["UniformVec",""],["VertexAttribute","Vertex inputs (attributes) to shaders."],["VertexBufferLayout","Describes how the vertex buffer is interpreted."],["VertexState",""],["WgpuAdapterInfo","Information about an adapter."],["WgpuFeatures","Features that are not guaranteed to be supported."],["WgpuLimits","Represents the sets of limits an adapter/device supports."]],"trait":[["SpecializedMeshPipeline",""],["SpecializedPipeline",""]],"type":[["BufferAddress","Integral type used for buffer offsets."],["BufferDescriptor","Describes a [`Buffer`]."],["BufferSize","Integral type used for buffer slice sizes."],["CommandEncoderDescriptor","Describes a [`CommandEncoder`]."],["ImageCopyBuffer","View of a buffer which can be used to copy to/from a texture."],["ImageCopyTexture","View of a texture which can be used to copy to/from a buffer/texture."],["TextureDescriptor","Describes a [`Texture`]."]]});